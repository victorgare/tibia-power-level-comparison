import Spinner from '../Spinner/Spinner'

interface Props {
    label: string
    total: number
    current: number
}

export default function ProgressBar(props: Props) {
    const progress = () => {
        return ((props.current / props.total) * 100).toFixed(0)
    }

    const isLoading = () => {
        let progressInt = parseInt(progress())
        return progressInt < 100 && props.total > 0
    }
    return (
        <>
            <div className="relative pt-1">
                <div className="mb-2 flex items-center justify-between">
                    <div>
                        <span className="flex rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold uppercase text-slate-600">
                            {props.label}

                            {isLoading() && <Spinner />}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="inline-block text-xs font-semibold text-slate-600">
                            {props.current} / {props.total}
                        </span>
                    </div>
                </div>
                <div className="mb-4 flex h-2 overflow-hidden rounded bg-slate-200 text-xs">
                    <div
                        style={{ width: `${progress()}%` }}
                        className="flex flex-col justify-center whitespace-nowrap bg-slate-500 text-center text-white shadow-none"
                    ></div>
                </div>
            </div>
        </>
    )
}
