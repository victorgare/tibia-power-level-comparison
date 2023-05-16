import { useDebouncedCallback } from 'use-debounce'
import DecimalInput from '../DecimalInputs/DecimalInput'
import TextInput from '../TextInput/TextInput'
import PlayerFormProps from './Model/PlayerFormProps'
import Image from 'next/image'
import { ChangeEvent, useEffect } from 'react'
import { fetchCharacterData } from './CharacterApi'

export default function PlayerForm(props: PlayerFormProps) {
    var debounced = useDebouncedCallback(
        (property: string, value: string | number) => {
            props.onChange?.({
                ...props.player,
                [property]: value,
            })
        },
        1000
    )

    const nameDebounced = useDebouncedCallback(async (name: string) => {
        const character = (await fetchCharacterData(name)).characters.character
        if (character.level > 0) {
            debounced('name', name)
            debounced('currentLevel', character.level)
        }
    }, 1000)

    const characterNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        nameDebounced(event.target.value)
    }

    useEffect(() => {
        if (props.player.name) {
            nameDebounced(props.player.name)
        }
    }, [])
    return (
        <>
            <div className="w-full rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div className="w-full">
                    {props.image ? (
                        <Image
                            className="mx-auto"
                            src={props.image}
                            height={128}
                            alt="Outfit"
                        />
                    ) : (
                        <></>
                    )}
                </div>
                <div className="mb-4">
                    <TextInput
                        id="character-name"
                        label="Character name"
                        placeholder="Dejair Invencivel"
                        value={props.player.name}
                        onChange={characterNameChange}
                    />
                </div>
                <div className="mb-6">
                    <DecimalInput
                        id="current-level"
                        label="Current level"
                        placeholder="2.000"
                        value={props.player.currentLevel}
                        maxValue={3000}
                        onChange={(value) => debounced('currentLevel', value)}
                    />
                </div>
                <div className="mb-6">
                    <DecimalInput
                        id="avg-daily-xp"
                        label="Average Daily Experience"
                        placeholder="200.000.000"
                        value={props.player.avgDailyExperience}
                        onChange={(value) =>
                            debounced('avgDailyExperience', value)
                        }
                    />
                </div>
            </div>
        </>
    )
}
