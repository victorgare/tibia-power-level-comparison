import { AlertProps } from './Model/AlertProps'

export default function ErrorAlert(props: AlertProps) {
    return (
        <>
            {props.messages.map((value, index) => {
                return (
                    <div
                        key={index}
                        className="relative mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                        role="alert"
                    >
                        <strong className="font-bold">{value} </strong>
                    </div>
                )
            })}
        </>
    )
}
