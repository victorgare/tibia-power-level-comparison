import Image from 'next/image'
import xpBoost from '../../imgs/XP_Boost.gif'
import TextInput from '@/components/TextInput/TextInput'
import { useCallback, useEffect, useState } from 'react'
import { calculateTotalXpFromLevel } from '@/helpers/level'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import MiniTibiaCoin from '@/components/StoreWorth/MiniTibiaCoin'
import { formatDecimal } from '@/helpers/formatValue'

const ONE_MILLION = 1000000
type RangeValues = {
    range: string
    diff: number
    price: number
    total: number
}

const getDefaultPriceValues = (level: number) => {
    const defaultValues = new Map<number, number>([
        [1, 0],
        [100, 0],
        [200, 0],
        [300, 1.5],
        [400, 2],
        [500, 2.5],
        [600, 3],
        [700, 3],
        [800, 3],
        [900, 3.5],
        [1000, 4],
        [1100, 4.5],
    ])

    return defaultValues.get(level) ?? 4.5
}

const generateLevelRanges = (max: number) => {
    const ranges = []
    for (let start = 0; start <= max; start += 100) {
        const end = Math.min(start + 99, max)
        ranges.push({ start: start === 0 ? 1 : start, end })
    }

    return ranges
}

const getInitialPrices = () => {
    const ranges = generateLevelRanges(1500)
    const initialPrices = ranges.map((range) => {
        return [range.start, getDefaultPriceValues(range.start)] as [
            number,
            number
        ]
    })

    return new Map(initialPrices)
}
export default function CharacterValue() {
    const [level, setLevel] = useState(1)
    const [rangeValues, setRangeValues] = useState<RangeValues[]>([])
    const [rangePrices, setRangePrices] = useState<Map<number, number>>(
        getInitialPrices()
    )

    const calculateRangeValues = useCallback(
        (lvl: number) => {
            const ranges = generateLevelRanges(lvl)
            const result: RangeValues[] = []

            for (const range of ranges) {
                const rangeLabel = `${range.start}-${range.end}`
                const minXp =
                    calculateTotalXpFromLevel(range.start) / ONE_MILLION
                const maxXp = calculateTotalXpFromLevel(range.end) / ONE_MILLION
                const diff = Math.floor(maxXp - minXp)
                const price = rangePrices.get(range.start) ?? 0
                const total = Math.floor(price * diff)
                result.push({
                    range: rangeLabel,
                    diff: diff,
                    price: price,
                    total: total,
                })
            }

            setRangeValues(result)
        },
        [rangePrices]
    )

    const updatePrice = (key: number, newPrice: number) => {
        const newMap = new Map(rangePrices)
        newMap.set(key, newPrice)
        setRangePrices(newMap)
    }

    useEffect(() => {
        calculateRangeValues(level)
    }, [rangePrices, level, calculateRangeValues])

    return (
        <>
            <div className=" grid grid-flow-row-dense grid-cols-7 gap-4">
                <div className="col-span-4">
                    <Card className="w-full">
                        <CardContent>
                            <div className="relative col-start-1 col-end-3 row-auto mb-6">
                                <div className="mx-auto max-w-[16rem] flex-none gap-2">
                                    <span className="inset-y-0 left-9 top-5 flex flex-nowrap items-center pr-4 pt-5">
                                        <Image
                                            className="mx-auto"
                                            src={xpBoost}
                                            height={50}
                                            alt="Character image"
                                        />
                                    </span>
                                    <TextInput
                                        id="level"
                                        label="Level"
                                        placeholder="1.000"
                                        value={level.toString()}
                                        onChange={(event) => {
                                            const level = parseInt(
                                                event.target.value
                                            )

                                            const parsedLevel = isNaN(level)
                                                ? 0
                                                : level
                                            setLevel(parsedLevel)
                                        }}
                                    />
                                </div>
                            </div>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Range</TableHead>
                                        <TableHead>
                                            Xp diff (in millions)
                                        </TableHead>
                                        <TableHead>Xp million price</TableHead>
                                        <TableHead>Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {rangeValues.map((item) => {
                                        return (
                                            <TableRow key={item.range}>
                                                <TableCell>
                                                    {item.range}
                                                </TableCell>
                                                <TableCell>
                                                    {item.diff}
                                                </TableCell>
                                                <TableCell>
                                                    {item.price}
                                                </TableCell>
                                                <TableCell>
                                                    {item.total}
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-4">
                            Total:
                            <div className="flex items-center gap-2 font-bold text-green-500">
                                {formatDecimal(
                                    rangeValues.reduce(
                                        (sum, item) => sum + item.total,
                                        0
                                    )
                                )}{' '}
                                TC <MiniTibiaCoin />
                            </div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-span-3 p-2">
                    <Card className="w-full">
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Range</TableHead>
                                        <TableHead>
                                            Price per million xp
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {Array.from(rangePrices.entries()).map(
                                        ([levelRange, priceRange]) => {
                                            return (
                                                <TableRow key={levelRange}>
                                                    <TableCell>
                                                        {levelRange}
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextInput
                                                            id={`price-${levelRange}`}
                                                            label=""
                                                            placeholder="1.000"
                                                            value={priceRange.toString()}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                const price =
                                                                    parseFloat(
                                                                        event
                                                                            .target
                                                                            .value
                                                                    )

                                                                const parsedPrice =
                                                                    isNaN(price)
                                                                        ? 0
                                                                        : price

                                                                updatePrice(
                                                                    levelRange,
                                                                    parsedPrice
                                                                )
                                                            }}
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
