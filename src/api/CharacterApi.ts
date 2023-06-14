import axios, { GenericAbortSignal } from 'axios'
import { PlayerApiModel } from './Model/PlayerApiModel'

export { fetchCharacterData, creatAbortController }

const creatAbortController = () => {
    return new AbortController()
}
const fetchCharacterData = async (
    characterName: string,
    signal?: GenericAbortSignal
): Promise<PlayerApiModel> => {
    return (
        await axios.get<PlayerApiModel>(
            `${process.env.NEXT_PUBLIC_TIBIA_API_DATA_URL}/character/${characterName}`,
            {
                signal,
            }
        )
    ).data
}
