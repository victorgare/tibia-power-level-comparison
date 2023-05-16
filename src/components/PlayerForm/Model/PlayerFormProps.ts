import { StaticImageData } from 'next/image'
import Player from './Player'

export default interface PlayerFormProps {
    player: Player
    onChange?: (player: Player) => void
    image: StaticImageData
}
