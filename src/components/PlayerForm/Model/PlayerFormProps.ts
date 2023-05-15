import Player from './Player'

export default interface PlayerFormProps {
    player: Player
    onChange?: (player: Player) => void
}
