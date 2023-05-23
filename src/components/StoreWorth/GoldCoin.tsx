import Image from 'next/image'
import goldCoin from '../../imgs/Gold_Coin.gif'

export default function GoldCoin() {
    return (
        <>
            <Image src={goldCoin} height={21} alt="Gold coin" />
        </>
    )
}
