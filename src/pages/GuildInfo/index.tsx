import { useDebouncedCallback } from 'use-debounce'
import Image from 'next/image'
import defaultGuildLogo from '../../imgs/default_guild_logo.gif'
import { useRef, useState } from 'react'
import TextInput from '@/components/TextInput/TextInput'
import ProgressBar from '@/components/Pogressbar/Progressbar'
import { fetchGuildData } from '@/api/GuildApi'
import { GuildMemberApiModel } from '@/api/Model/GuildMemberApiModel'
import { fetchCharacterData } from '@/api/CharacterApi'
import { PlayerApiModel } from '@/api/Model/PlayerApiModel'
import GuildInfo from '@/components/GuildInfo/GuildInfo'
import axios from 'axios'
import ErrorAlert from '@/components/Alerts/ErrorAlert'

export default function MembersResidence() {
    const abortControllerRef = useRef<AbortController>(new AbortController())

    const [guildName, setGuildName] = useState<string>('')
    const [currentProgressCounter, setCurrentProgressCounter] =
        useState<number>(0)
    const [totalProgressCounter, setTotalProgressCounter] = useState<number>(0)
    const [guildMembers, setGuildMembers] = useState<PlayerApiModel[]>([])
    const [errorMessages, setErrorMessages] = useState<string[]>([])

    const guildNameDebounced = useDebouncedCallback(
        async (guildName: string) => {
            // clean old data
            resetData()

            const guild = (await fetchGuildData(guildName)).guilds.guild

            if (guild.members_total > 0) {
                setCurrentProgressCounter(0)
                setTotalProgressCounter(guild.members_total)

                await findMembers(guild.members)
            } else {
                setErrorMessages([...['Guild not found']])
            }
        },
        750
    )

    const findMembers = async (members: GuildMemberApiModel[]) => {
        try {
            for (const member of members) {
                const player = await fetchCharacterData(
                    member.name,
                    abortControllerRef.current.signal
                )

                setGuildMembers((prevValue) => [...prevValue, player])
                setCurrentProgressCounter((previousValue) => previousValue + 1)
            }
        } catch (error) {
            if (axios.isCancel(error)) {
                console.error('Request canceled')
            } else {
                console.log(error)
            }
        }
    }

    const handleGuildNameChange = (guildName: string) => {
        setGuildName(guildName)
        guildNameDebounced(guildName)
    }

    const resetData = () => {
        abortControllerRef.current.abort()
        abortControllerRef.current = new AbortController()
        setGuildMembers(() => [...[]])
        setErrorMessages(() => [...[]])
    }

    return (
        <>
            <div className="w-full rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div className="grid grid-flow-row grid-rows-1 gap-4">
                    <div className="relative col-start-1 col-end-3 row-auto mb-6">
                        <div className="mx-auto flex max-w-[16rem] flex-none">
                            <span className="inset-y-0 left-9 top-5 flex flex-nowrap items-center pr-1 pt-5">
                                <Image
                                    className="mx-auto"
                                    src={defaultGuildLogo}
                                    height={32}
                                    alt="Default guild logo"
                                />
                            </span>

                            <TextInput
                                id="guild-name"
                                label="Guild name"
                                placeholder="Libertabra Pune"
                                value={guildName}
                                onChange={(event) =>
                                    handleGuildNameChange(event.target.value)
                                }
                            />
                        </div>
                        <ErrorAlert messages={errorMessages} />
                        <div className="col-span-2 mt-4">
                            <div className="grid grid-cols-1 gap-4">
                                <ProgressBar
                                    label="Finding members"
                                    current={currentProgressCounter}
                                    total={totalProgressCounter}
                                />

                                <GuildInfo members={guildMembers} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
