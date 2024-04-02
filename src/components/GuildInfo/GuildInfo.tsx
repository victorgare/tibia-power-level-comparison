import { useEffect, useState } from 'react'
import MembersResidenceTable from './MembersResidenceTable'
import { GuildProps } from './Model/GuildProps'
import { ResidenceModel } from './Model/ResidenceModel'
import { PlayerApiModel } from '@/api/Model/PlayerApiModel'
import MembersTable from './MembersTable'

export default function GuildInfo(props: GuildProps) {
    const [membersResidence, setMembersResidence] = useState<ResidenceModel[]>(
        []
    )

    const findMembersResidences = (members: PlayerApiModel[]) => {
        const residences: ResidenceModel[] = []
        for (const member of members) {
            const playerResidence = member.character.character.residence

            var existingResidenceIndex = residences.findIndex(
                (item) => item.residence === playerResidence
            )

            if (existingResidenceIndex === -1) {
                residences.push({
                    residence: playerResidence,
                    occurrences: 1,
                })
            } else {
                residences[existingResidenceIndex].occurrences! += 1
            }
        }

        setMembersResidence([...residences])
    }

    useEffect(() => {
        findMembersResidences(props.members)
    }, [props.members])

    return (
        <>
            <div className="grid grid-cols-1 gap-4 overflow-x-auto sm:grid-cols-2">
                <MembersResidenceTable residences={membersResidence} />
                <MembersTable
                    members={props.members.map((item) => {
                        return item.character.character
                    })}
                />
            </div>
        </>
    )
}
