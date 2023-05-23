import WorthCardModel from './Model/WorthCardModel'
import WorthCard from './WorthCard'

import avalancheRune from '../../imgs/Avalanche_Rune.gif'
import energyBombRune from '../../imgs/Energy_Bomb_Rune.gif'
import fireBombRune from '../../imgs/Fire_Bomb_Rune.gif'
import greatFireBallRune from '../../imgs/Great_Fireball_Rune.gif'
import magicWallRune from '../../imgs/Magic_Wall_Rune.gif'
import paralyseRune from '../../imgs/Paralyse_Rune.gif'
import poisonBombRune from '../../imgs/Poison_Bomb_Rune.gif'
import stoneShowerRune from '../../imgs/Stone_Shower_Rune.gif'
import suddenDeathRune from '../../imgs/Sudden_Death_Rune.gif'
import thuderStormRune from '../../imgs/Thunderstorm_Rune.gif'
import ultimateHealingRune from '../../imgs/Ultimate_Healing_Rune.gif'
import wildGrowthRune from '../../imgs/Wild_Growth_Rune.gif'

interface Props {
    tcPrice: number
}

export default function RunesWrapper(props: Props) {
    const availableItens: WorthCardModel[] = [
        {
            itemName: 'Avalanche Rune',
            tcAmount: 12,
            itemQuantity: 250,
            goldPrice: 57,
            image: {
                src: avalancheRune,
            },
        },
        {
            itemName: 'Energy Bomb Rune',
            tcAmount: 40,
            itemQuantity: 250,
            goldPrice: 203,
            image: {
                src: energyBombRune,
            },
        },
        {
            itemName: 'Fire Bomb Rune',
            tcAmount: 29,
            itemQuantity: 250,
            goldPrice: 147,
            image: {
                src: fireBombRune,
            },
        },
        {
            itemName: 'Great Fireball Rune',
            tcAmount: 12,
            itemQuantity: 250,
            goldPrice: 57,
            image: {
                src: greatFireBallRune,
            },
        },
        {
            itemName: 'Magic Wall Rune',
            tcAmount: 23,
            itemQuantity: 250,
            goldPrice: 116,
            image: {
                src: magicWallRune,
            },
        },
        {
            itemName: 'Paralyse Rune',
            tcAmount: 140,
            itemQuantity: 250,
            goldPrice: 700,
            image: {
                src: paralyseRune,
            },
        },
        {
            itemName: 'Poison Bomb Rune',
            tcAmount: 17,
            itemQuantity: 250,
            goldPrice: 85,
            image: {
                src: poisonBombRune,
            },
        },
        {
            itemName: 'Stone Shower Rune',
            tcAmount: 7,
            itemQuantity: 250,
            goldPrice: 37,
            image: {
                src: stoneShowerRune,
            },
        },
        {
            itemName: 'Sudden Death Rune',
            tcAmount: 28,
            itemQuantity: 250,
            goldPrice: 135,
            image: {
                src: suddenDeathRune,
            },
        },
        {
            itemName: 'Thunderstorm Rune',
            tcAmount: 9,
            itemQuantity: 250,
            goldPrice: 47,
            image: {
                src: thuderStormRune,
            },
        },
        {
            itemName: 'Ultimate Healing Rune',
            tcAmount: 35,
            itemQuantity: 250,
            goldPrice: 175,
            image: {
                src: ultimateHealingRune,
            },
        },
        {
            itemName: 'Wild Growth Rune',
            tcAmount: 32,
            itemQuantity: 250,
            goldPrice: 160,
            image: {
                src: wildGrowthRune,
            },
        },
    ].sort((item1, item2) => {
        return (
            item2.goldPrice - item1.goldPrice ||
            item1.itemName.localeCompare(item2.itemName)
        )
    })

    return (
        <>
            {availableItens.map((item, index) => {
                return (
                    <WorthCard key={index} tcPrice={props.tcPrice} {...item} />
                )
            })}
        </>
    )
}
