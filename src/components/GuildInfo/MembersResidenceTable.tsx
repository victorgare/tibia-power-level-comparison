import { ResidenceModel } from './Model/ResidenceModel'

interface Props {
    residences: ResidenceModel[]
}

export default function MembersResidenceTable(props: Props) {
    return (
        <>
            <div className="shadow-soft-xl relative mb-0 flex w-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid border-transparent bg-white bg-clip-border">
                <div className="mb-0 rounded-t-2xl bg-white p-6 pb-0">
                    <h6 className="font-semibold text-slate-600">
                        Members Residence
                    </h6>
                </div>
                <div className="flex-auto px-0 pb-2 pt-0">
                    <div className="overflow-x-auto p-0">
                        <table className="mb-0 w-full items-center border-gray-200 align-top text-slate-500">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="text-xxs border-b-solid tracking-none whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-left align-middle font-bold uppercase text-slate-400 opacity-70 shadow-none">
                                        City
                                    </th>
                                    <th className="text-xxs border-b-solid tracking-none whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 pl-2 text-left align-middle font-bold uppercase text-slate-400 opacity-70 shadow-none">
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.residences
                                    ?.sort((item1, item2) => {
                                        return (
                                            item2.occurrences! -
                                            item1.occurrences!
                                        )
                                    })
                                    .map((item) => {
                                        return (
                                            <tr key={item.residence}>
                                                <td className="whitespace-nowrap border-b bg-transparent p-2 align-middle shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal">
                                                                {item.residence}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap border-b bg-transparent p-2 align-middle shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight">
                                                        {item.occurrences}
                                                    </p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
