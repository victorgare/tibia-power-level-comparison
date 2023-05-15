import { useDebouncedCallback } from 'use-debounce'
import DecimalInput from '../DecimalInputs/DecimalInput'
import TextInput from '../TextInput/TextInput'
import PlayerFormProps from './Model/PlayerFormProps'

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

    return (
        <>
            <div className="w-full rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div className="mb-4">
                    <TextInput
                        id="character-name"
                        label="Character name"
                        placeholder="Dejair Invencivel"
                        value={props.player.name}
                        onChange={(event) => {
                            event.preventDefault()
                            debounced('name', event.target.value)
                        }}
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