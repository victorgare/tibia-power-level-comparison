import WorthCard from './WorthCard'
import WorthCardModel from './Model/WorthCardModel'

import manaPotionImg from '../../imgs/Mana_Potion.gif'
import healthPotionImg from '../../imgs/Health_Potion.gif'
import strongHealthPotionImg from '../../imgs/Strong_Health_Potion.gif'
import greatHealthPotionImg from '../../imgs/Great_Health_Potion.gif'
import greatManaPotionImg from '../../imgs/Great_Mana_Potion.gif'
import greatSpiritPotionImg from '../../imgs/Great_Spirit_Potion.gif'
import ultimateHealthPotionImg from '../../imgs/Ultimate_Health_Potion.gif'
import ultimateManaPotionImg from '../../imgs/Ultimate_Mana_Potion.gif'
import ultimateSpiritPotionImg from '../../imgs/Ultimate_Spirit_Potion.gif'
import supremeHealthPotionImg from '../../imgs/Supreme_Health_Potion.gif'
import strongManaPotionImg from '../../imgs/Strong_Mana_Potion.gif'
import healthKegImg from '../../imgs/Health_Keg.gif'
import strongHealthKegImg from '../../imgs/Strong_Health_Keg.gif'
import greatHealthKegImg from '../../imgs/Great_Health_Keg.gif'
import greatSpiritKegImg from '../../imgs/Great_Spirit_Keg.gif'
import ultimateHealthKegImg from '../../imgs/Ultimate_Health_Keg.gif'
import ultimateSpiritKegImg from '../../imgs/Ultimate_Spirit_Keg.gif'
import supremeHealthKegImg from '../../imgs/Supreme_Health_Keg.gif'
import manaKegImg from '../../imgs/Mana_Keg.gif'
import strongManaKegImg from '../../imgs/Strong_Mana_Keg.gif'
import greatManaKegImg from '../../imgs/Great_Mana_Keg.gif'
import ultimateManaKegImg from '../../imgs/Ultimate_Mana_Keg.gif'
import greatHealthCask from '../../imgs/Great_Health_Cask.gif'
import greatManaCask from '../../imgs/Great_Mana_Cask.gif'
import greatSpiritCask from '../../imgs/Great_Spirit_Cask.gif'
import healthCask from '../../imgs/Health_Cask.gif'
import manaCask from '../../imgs/Mana_Cask.gif'
import strongHealthCask from '../../imgs/Strong_Health_Cask.gif'
import strongManaCask from '../../imgs/Strong_Mana_Cask.gif'
import supremeHealthCaskImg from '../../imgs/Supreme_Health_Cask.gif'
import ultimateHealthCaskImg from '../../imgs/Ultimate_Health_Cask.gif'
import ultimateManaCaskImg from '../../imgs/Ultimate_Mana_Cask.gif'
import ultimateSpiritCaskImg from '../../imgs/Ultimate_Spirit_Cask.gif'

interface Props {
    tcPrice: number
}

export default function ItensWrapper(props: Props) {
    const availableItens: WorthCardModel[] = [
        {
            itemName: 'Health Potion',
            tcAmount: 11,
            itemQuantity: 300,
            goldPrice: 50,
            image: {
                src: healthPotionImg,
            },
        },
        {
            itemName: 'Strong Health Potion',
            tcAmount: 21,
            itemQuantity: 250,
            goldPrice: 115,
            image: {
                src: strongHealthPotionImg,
            },
        },
        {
            itemName: 'Great Health Potion',
            tcAmount: 41,
            itemQuantity: 250,
            goldPrice: 225,
            image: {
                src: greatHealthPotionImg,
            },
        },
        {
            itemName: 'Great Mana Potion',
            tcAmount: 26,
            itemQuantity: 250,
            goldPrice: 144,
            image: {
                src: greatManaPotionImg,
            },
        },
        {
            itemName: 'Great Spirit Potion',
            tcAmount: 41,
            itemQuantity: 250,
            goldPrice: 228,
            image: {
                src: greatSpiritPotionImg,
            },
        },
        {
            itemName: 'Ultimate Health Potion',
            tcAmount: 68,
            itemQuantity: 250,
            goldPrice: 379,
            image: {
                src: ultimateHealthPotionImg,
            },
        },
        {
            itemName: 'Ultimate Mana Potion',
            tcAmount: 79,
            itemQuantity: 250,
            goldPrice: 438,
            image: {
                src: ultimateManaPotionImg,
            },
        },
        {
            itemName: 'Ultimate Spirit Potion',
            tcAmount: 79,
            itemQuantity: 250,
            goldPrice: 438,
            image: {
                src: ultimateSpiritPotionImg,
            },
        },
        {
            itemName: 'Supreme Health Potion',
            tcAmount: 113,
            itemQuantity: 250,
            goldPrice: 625,
            image: {
                src: supremeHealthPotionImg,
            },
        },
        {
            itemName: 'Mana Potion',
            tcAmount: 12,
            itemQuantity: 300,
            goldPrice: 56,
            image: {
                src: manaPotionImg,
            },
        },
        {
            itemName: 'Strong Mana Potion',
            tcAmount: 17,
            itemQuantity: 250,
            goldPrice: 93,
            image: {
                src: strongManaPotionImg,
            },
        },
        {
            itemName: 'Health Keg',
            tcAmount: 26,
            itemQuantity: 500,
            goldPrice: 50,
            image: {
                src: healthKegImg,
            },
        },
        {
            itemName: 'Strong Health Keg',
            tcAmount: 53,
            itemQuantity: 500,
            goldPrice: 115,
            image: {
                src: strongHealthKegImg,
            },
        },
        {
            itemName: 'Great Health Keg',
            tcAmount: 103,
            itemQuantity: 500,
            goldPrice: 225,
            image: {
                src: greatHealthKegImg,
            },
        },
        {
            itemName: 'Great Spirit Keg',
            tcAmount: 105,
            itemQuantity: 500,
            goldPrice: 228,
            image: {
                src: greatSpiritKegImg,
            },
        },
        {
            itemName: 'Ultimate Health Keg',
            tcAmount: 175,
            itemQuantity: 500,
            goldPrice: 379,
            image: {
                src: ultimateHealthKegImg,
            },
        },
        {
            itemName: 'Ultimate Spirit Keg',
            tcAmount: 202,
            itemQuantity: 500,
            goldPrice: 438,
            image: {
                src: ultimateSpiritKegImg,
            },
        },
        {
            itemName: 'Supreme Health Keg',
            tcAmount: 288,
            itemQuantity: 500,
            goldPrice: 625,
            image: {
                src: supremeHealthKegImg,
            },
        },
        {
            itemName: 'Mana Keg',
            tcAmount: 26,
            itemQuantity: 500,
            goldPrice: 56,
            image: {
                src: manaKegImg,
            },
        },
        {
            itemName: 'Strong Mana Keg',
            tcAmount: 43,
            itemQuantity: 500,
            goldPrice: 93,
            image: {
                src: strongManaKegImg,
            },
        },
        {
            itemName: 'Great Mana Keg',
            tcAmount: 66,
            itemQuantity: 500,
            goldPrice: 144,
            image: {
                src: greatManaKegImg,
            },
        },
        {
            itemName: 'Ultimate Mana Keg',
            tcAmount: 202,
            itemQuantity: 500,
            goldPrice: 438,
            image: {
                src: ultimateManaKegImg,
            },
        },
        {
            itemName: 'Great Health Cask',
            tcAmount: 22,
            itemQuantity: 1000,
            goldPrice: 225,
            image: {
                src: greatHealthCask,
            },
        },
        {
            itemName: 'Great Mana Cask',
            tcAmount: 14,
            itemQuantity: 1000,
            goldPrice: 144,
            image: {
                src: greatManaCask,
            },
        },
        {
            itemName: 'Great Spirit Cask',
            tcAmount: 22,
            itemQuantity: 1000,
            goldPrice: 228,
            image: {
                src: greatSpiritCask,
            },
        },
        {
            itemName: 'Health Cask',
            tcAmount: 5,
            itemQuantity: 1000,
            goldPrice: 50,
            image: {
                src: healthCask,
            },
        },
        {
            itemName: 'Mana Cask',
            tcAmount: 5,
            itemQuantity: 1000,
            goldPrice: 56,
            image: {
                src: manaCask,
            },
        },
        {
            itemName: 'Strong Health Cask',
            tcAmount: 11,
            itemQuantity: 1000,
            goldPrice: 115,
            image: {
                src: strongHealthCask,
            },
        },
        {
            itemName: 'Strong Mana Cask',
            tcAmount: 9,
            itemQuantity: 1000,
            goldPrice: 93,
            image: {
                src: strongManaCask,
            },
        },
        {
            itemName: 'Supreme Health Cask',
            tcAmount: 59,
            itemQuantity: 1000,
            goldPrice: 625,
            image: {
                src: supremeHealthCaskImg,
            },
        },
        {
            itemName: 'Ultimate Health Cask',
            tcAmount: 36,
            itemQuantity: 1000,
            goldPrice: 379,
            image: {
                src: ultimateHealthCaskImg,
            },
        },
        {
            itemName: 'Ultimate Mana Cask',
            tcAmount: 42,
            itemQuantity: 1000,
            goldPrice: 438,
            image: {
                src: ultimateManaCaskImg,
            },
        },
        {
            itemName: 'Ultimate Spirit Cask',
            tcAmount: 42,
            itemQuantity: 1000,
            goldPrice: 438,
            image: {
                src: ultimateSpiritCaskImg,
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
