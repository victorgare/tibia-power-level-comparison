import { Switch as HeadlessSwitch } from '@headlessui/react'

interface Props {
    checked?: boolean
    label?: string
    onChange?: (checked: boolean) => void
}
export default function Switch(props: Props) {
    return (
        <>
            <HeadlessSwitch.Group>
                <HeadlessSwitch
                    checked={props.checked}
                    onChange={props.onChange}
                    className={`${
                        props.checked ? 'bg-slate-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                    <span className="sr-only">{props.label}</span>
                    <span
                        className={`${
                            props.checked ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </HeadlessSwitch>
                <HeadlessSwitch.Label className="ml-4 font-semibold">
                    {props.label}
                </HeadlessSwitch.Label>
            </HeadlessSwitch.Group>
        </>
    )
}
