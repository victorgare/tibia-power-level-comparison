import DecimalInput from '@/components/DecimalInputs/DecimalInput'
import Image from 'next/image'
import tibiaCoinIcon from '../../imgs/Tibia_Coin.gif'
import ItensWrapper from '@/components/StoreWorth/ItensWrapper'
import { useState } from 'react'

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
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <ItensWrapper tcPrice={tcPrice} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
