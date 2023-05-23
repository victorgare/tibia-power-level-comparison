import DecimalInput from '@/components/DecimalInputs/DecimalInput'
import Image from 'next/image'
import tibiaCoinIcon from '../../imgs/Tibia_Coin.gif'
import PotionsWrapper from '@/components/StoreWorth/PotionsWrapper'
import { useState } from 'react'
import { Tabs } from '@/components/Tab/Tabs'

import oldHealthPotion from '../../imgs/Old_Health_Potion.gif'
import suddenDeathRune from '../../imgs/Sudden_Death_Rune.gif'
import RunesWrapper from '@/components/StoreWorth/RunesWrapper'

const PotionsTitle = (
    <>
        <Image className="" src={oldHealthPotion} height={30} alt="Potion" />
        Potions
    </>
)

const RunesTitle = (
    <>
        <Image className="" src={suddenDeathRune} height={30} alt="Runes" />
        Runes
    </>
)
export default function StoreWorth() {
    const [tcPrice, setTcPrice] = useState<number>(null!)
    return (
        <>
            <div className="w-full rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div className="grid grid-flow-row grid-rows-1 gap-4">
                    <div className="relative col-start-1 col-end-3 row-auto mb-6">
                        <div className="mx-auto flex max-w-[16rem] flex-none">
                            <span className="inset-y-0 left-9 top-5 flex flex-nowrap items-center pr-1 pt-5">
                                <Image
                                    className="mx-auto"
                                    src={tibiaCoinIcon}
                                    height={32}
                                    alt="Tibia coin image"
                                />
                            </span>

                            <DecimalInput
                                id="tibia-coin-price"
                                label="Tibia coin price"
                                maxValue={100000}
                                placeholder="33.000"
                                value={tcPrice}
                                onChange={(value) => setTcPrice(Number(value))}
                            />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Tabs.Group>
                            <Tabs.Item title={PotionsTitle}>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <PotionsWrapper tcPrice={tcPrice} />
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title={RunesTitle}>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    <RunesWrapper tcPrice={tcPrice} />
                                </div>
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </div>
            </div>
        </>
    )
}
