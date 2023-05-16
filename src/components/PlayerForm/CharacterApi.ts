import axios from 'axios'
import { PlayerApiModel } from './Model/PlayerApiModel'

export { fetchCharacterData }

const fetchCharacterData = async (
    characterName: string
): Promise<PlayerApiModel> => {
    return (
        await axios.get<PlayerApiModel>(
            `https://api.tibiadata.com/v3/character/${characterName}`
        )
    ).data
}
