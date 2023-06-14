import { AlertProps } from './Model/AlertProps'

export default function ErrorAlert(props: AlertProps) {
    return (
        <>
            {props.messages.map((value, index) => {
                return (
                    <div
                        key={index}
                        className="relative mb-4 rounded border border-indigo-400 bg-indigo-100 px-4 py-3 text-indigo-700"
                        role="alert"
                    >
                        <strong className="font-bold">{value} </strong>
                    </div>
                )
            })}
        </>
    )
}
