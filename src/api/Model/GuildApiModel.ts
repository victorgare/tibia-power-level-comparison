import { GuildMemberApiModel } from './GuildMemberApiModel'

export interface GuildApiModel {
    guild: {
        members: GuildMemberApiModel[]
        members_total: number
    }
}
