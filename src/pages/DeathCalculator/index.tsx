import Image from 'next/image'
import xpBoost from '../../imgs/XP_Boost.gif'
import { useDebouncedCallback } from 'use-debounce'
import { useState } from 'react'
import TextInput from '@/components/TextInput/TextInput'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { DeathResult } from '@/components/DeathCalculator/Model/DeathResult'
function calculateExpLoss(level: number): DeathResult[] {
    // if (level < 1) throw new Error('Level must be greater than 0.')
    if (level < 1) {
        return []
    }

    let a = level + 50
    let b = a / 100
    let c = Math.pow(level, 2)
    let d = c - 5 * level + 8

    const result: DeathResult[] = []

    // Base loss without blessings
    let baseXpLoss = Math.floor(b * 50 * d)

    for (let index = 0; index <= 7; index++) {
        // const element = array[index]
        let numBless = 1 - index * 0.08
        let numBlessWithPromote = 1 - index * 0.08 - 0.3

        const blessNoPromo = Math.floor(baseXpLoss * numBless)
        const hardcoreNoPromo = Math.floor(
            baseXpLoss * numBless * 1.363636340410072
        )

        const blessPromo = Math.floor(baseXpLoss * numBlessWithPromote)
        const hardcodePromo = Math.floor(
            hardcoreNoPromo - hardcoreNoPromo * 0.5000003830011819
        )

        result.push({
            blessings: index,
            noPromo: blessNoPromo,
            promo: blessPromo,
            noPromoHardcore: hardcoreNoPromo,
            promoHardcore: hardcodePromo,
        })
    }

    return result
}

export default function DeathCalculator() {
    const [level, setLevel] = useState(1)
    const [deathResult, setDeathResult] = useState<DeathResult[]>([])
    const debouncedLevel = useDebouncedCallback((level: number) => {
        const result = calculateExpLoss(level)
        setDeathResult(result)
    }, 1000)

    return (
        <>
            <div className="w-full rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div className="grid grid-flow-row grid-rows-1 gap-4">
                    <div className="relative col-start-1 col-end-3 row-auto mb-6">
                        <div className="mx-auto flex max-w-[16rem] flex-none">
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
                                    const level = parseInt(event.target.value)

                                    const parsedLevel = isNaN(level) ? 0 : level
                                    setLevel(parsedLevel)
                                    debouncedLevel(parsedLevel)
                                }}
                            />
                        </div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Blessing N.</TableHead>
                                    <TableHead>PA XP loss</TableHead>
                                    <TableHead>Free XP loss</TableHead>
                                    <TableHead>PA hardcore xp loss</TableHead>
                                    <TableHead>Free hardcore xp loss</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {deathResult.map((item) => {
                                    return (
                                        <TableRow key={item.blessings}>
                                            <TableCell>
                                                {item.blessings} blessings
                                            </TableCell>
                                            <TableCell>
                                                {item.promo.toLocaleString()}
                                            </TableCell>
                                            <TableCell>
                                                {item.noPromo.toLocaleString()}
                                            </TableCell>
                                            <TableCell className="bg-red-50 font-bold text-red-500">
                                                {item.promoHardcore.toLocaleString()}
                                            </TableCell>
                                            <TableCell className="bg-red-50 font-bold text-red-500">
                                                {item.noPromoHardcore.toLocaleString()}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                                {/* <TableRow>
                                    <TableCell className="font-medium">
                                        INV001
                                    </TableCell>
                                    <TableCell>Paid</TableCell>
                                    <TableCell>Credit Card</TableCell>
                                    <TableCell className="text-right">
                                        $250.00
                                    </TableCell>
                                </TableRow> */}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
