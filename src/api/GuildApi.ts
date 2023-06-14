import axios from 'axios'
import { GuildApiModel } from './Model/GuildApiModel'

export { fetchGuildData }

const fetchGuildData = async (guildName: string): Promise<GuildApiModel> => {
    return (
        await axios.get<GuildApiModel>(
            `${process.env.NEXT_PUBLIC_TIBIA_API_DATA_URL}/guild/${guildName}`
        )
    ).data
}
