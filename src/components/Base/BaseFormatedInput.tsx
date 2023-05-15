import { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react'
import { FormatedInputProps } from './Model/FormatedInputProps'
import { removeMask } from '@/helpers/formatValue'

interface BaseFormatedInput extends FormatedInputProps {
    formatFunction(value: string | number): string
}

export default function BaseFormatedInput(props: BaseFormatedInput) {
    const [formatedValue, setFormatedValue] = useState('')
    const [previousValue, setpreviousValue] = useState<any>(null)

    const resetToInitialValue = () => {
        setFormatedValue('')
    }

    const format = (value?: string | number) => {
        if (value) {
            let formatedValueResult = props?.formatFunction(value)

            setFormatedValue(formatedValueResult)
            setpreviousValue(value)

            if (props.masked === true) {
                props.onChange?.(formatedValueResult)
            } else {
                props.onChange?.(parseFloat(removeMask(formatedValueResult)))
            }
        }

        if (value === previousValue) {
            resetToInitialValue()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()

        format(event.target.value)
    }

    const onKeyDownHandler = (event: KeyboardEvent) => {
        const numberEventKey = Number(event.key)
        const result = Number.isInteger(numberEventKey)

        if (!result && event.key !== 'Backspace') {
            event.preventDefault()
        }

        return true
    }

    useEffect(() => {
        format(props.value)
    }, [props.value])

    return (
        <>
            <div className="relative mb-3 mt-3 w-full">
                <label className="mb-2 block text-sm font-bold text-gray-700">
                    {props.label}
                </label>
                <input
                    type="text"
                    name={props.id}
                    id={props.id}
                    placeholder={props.placeholder}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                    autoComplete="off"
                    className="mb-2 w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring "
                    value={formatedValue}
                />
            </div>
        </>
    )
}
