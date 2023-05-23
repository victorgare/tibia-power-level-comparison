import Image from 'next/image'
import miniTibiCoin from '../../imgs/Mini_Tibia_Coin_Icon.gif'

export default function MiniTibiaCoin() {
    return (
        <>
            <Image src={miniTibiCoin} height={12} alt="Tibia coin" />
        </>
    )
}
