import Image from 'next/image'
import MiniTibiaCoin from './MiniTibiaCoin'
import GoldCoin from './GoldCoin'
import WorthCardModel from './Model/WorthCardModel'
import { formatDecimal } from '@/helpers/formatValue'

export default function WorthCard(props: WorthCardModel & { tcPrice: number }) {
    const findWorth = () => {
        const tibiaCoinCost = props.tcAmount * props.tcPrice
        const goldCost = props.itemQuantity * props.goldPrice

        if (tibiaCoinCost > goldCost) {
            return (
                <>
                    <div className="flex w-full flex-nowrap">
                        Better buy with{' '}
                        <div className="ml-1 flex flex-none">
                            <div className="px-1">
                                <GoldCoin />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        Total gold spent: {formatDecimal(goldCost)}
                    </div>
                    <div className="w-full">
                        Gold saved: {formatDecimal(tibiaCoinCost - goldCost)}
                    </div>
                </>
            )
        }

        return (
            <>
                <div className="flex w-full flex-nowrap">
                    Better buy with{' '}
                    <div className="ml-1 flex flex-none">
                        <div className="px-1">
                            <MiniTibiaCoin />
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    Total gold spent: {formatDecimal(tibiaCoinCost)}
                </div>
                <div className="w-full">
                    Gold saved: {formatDecimal(goldCost - tibiaCoinCost)}
                </div>
            </>
        )
    }
    return (
        <>
            <div className="w-full rounded bg-slate-200 px-6 pb-8 pt-6 shadow-xl ">
                <h1 className="inline-block text-center text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:text-xl">
                    {props.itemName}
                </h1>
                <div className="w-full">
                    <Image
                        className="mx-auto"
                        src={props.image.src}
                        height={props.image.height ?? 48}
                        alt={props.itemName}
                    />
                </div>
                <div className="mb-4 text-center">{props.itemQuantity}</div>
                <div className="mb-4">
                    <div className="grid grid-cols-2">
                        <div className="flex items-center">
                            <MiniTibiaCoin />
                            <div className="pl-1">{props.tcAmount}</div>
                        </div>
                        <div className="flex items-center">
                            <GoldCoin />
                            <div className="pl-1">{props.goldPrice}</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center">{findWorth()}</div>
            </div>
        </>
    )
}
