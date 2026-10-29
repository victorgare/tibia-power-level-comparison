import { useDebouncedCallback } from 'use-debounce'
import DecimalInput from '../DecimalInputs/DecimalInput'
import TextInput from '../TextInput/TextInput'
import PlayerFormProps from './Model/PlayerFormProps'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import { fetchCharacterData } from '../../api/CharacterApi'
import axios from 'axios'
import ErrorAlert from '../Alerts/ErrorAlert'

export default function PlayerForm(props: PlayerFormProps) {
    const [errorMessages, setErrorMessages] = useState<string[]>([])

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
        setErrorMessages([])
        try {
            const character = (await fetchCharacterData(name)).character
                .character
            if (character.level > 0) {
                debounced('name', name)
                debounced.flush()
                debounced('currentLevel', character.level)
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                setErrorMessages(['Character not found'])
            } else {
                console.error('Unable to fetch character data', error)
                setErrorMessages(['Unable to fetch character data'])
            }
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
                <ErrorAlert messages={errorMessages} />
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
