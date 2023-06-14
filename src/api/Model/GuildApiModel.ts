import { GuildMemberApiModel } from './GuildMemberApiModel'

export interface GuildApiModel {
    guilds: {
        guild: {
            members: GuildMemberApiModel[]
            members_total: number
        }
    }
}
