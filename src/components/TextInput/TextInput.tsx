import { ChangeEvent, KeyboardEvent } from 'react'

interface Props {
    id: string
    label: string
    placeholder?: string
    value?: string
    errorMessage?: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function TextInput(props: Props) {
    return (
        <>
            <>
                <div className="relative mb-3 mt-3 w-full">
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                        {props.label}
                    </label>
                    <input
                        onChange={props.onChange}
                        type="text"
                        defaultValue={props.value}
                        className="mb-2 w-full rounded border-0 bg-white px-3 py-3 text-sm text-slate-600 placeholder-slate-300 shadow transition-all duration-150 ease-linear focus:outline-none focus:ring "
                        placeholder={props.placeholder}
                    />
                    {props.errorMessage && (
                        <p className="mb-2 block text-xs font-bold text-red-600">
                            {props.errorMessage}
                        </p>
                    )}
                </div>
            </>
        </>
    )
}
