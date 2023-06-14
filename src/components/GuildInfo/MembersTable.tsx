import { CharacterBaseApiModel } from '@/api/Model/CharacterBaseApiModel'
import toast from 'react-hot-toast'

interface Props {
    members: CharacterBaseApiModel[]
}
export default function MembersTable(props: Props) {
    const addExiva = (playerName: string) => {
        navigator.clipboard.writeText(`exiva "${playerName}"`)
        toast.success('Exiva added to clipboard', {
            duration: 750,
        })
    }

    return (
        <>
            <div className="shadow-soft-xl relative mb-0 flex w-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid border-transparent bg-white bg-clip-border">
                <div className="mb-0 rounded-t-2xl bg-white p-6 pb-0">
                    <h6 className="font-semibold text-slate-600">Members</h6>
                </div>
                <div className=" flex-auto px-0 pb-2 pt-0">
                    <div className="max-h-96 overflow-x-auto p-0">
                        <table className="mb-0 w-full items-center border-gray-200 align-top text-slate-500">
                            <thead className="align-bottom">
                                <tr>
                                    <th className="text-xxs border-b-solid tracking-none whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 text-left align-middle font-bold uppercase text-slate-400 opacity-70 shadow-none">
                                        Name
                                    </th>
                                    <th className="text-xxs border-b-solid tracking-none whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 pl-2 text-left align-middle font-bold uppercase text-slate-400 opacity-70 shadow-none">
                                        Level
                                    </th>
                                    <th className="text-xxs border-b-solid tracking-none whitespace-nowrap border-b border-gray-200 bg-transparent px-6 py-3 pl-2 text-left align-middle font-bold uppercase text-slate-400 opacity-70 shadow-none">
                                        Vocation
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.members
                                    ?.sort((item1, item2) => {
                                        return item2.level! - item1.level!
                                    })
                                    .map((item) => {
                                        return (
                                            <tr
                                                key={item.name}
                                                onClick={() =>
                                                    addExiva(item.name)
                                                }
                                                className="hover:cursor-pointer"
                                            >
                                                <td className="whitespace-nowrap border-b bg-transparent p-2 align-middle shadow-transparent">
                                                    <div className="flex px-2 py-1">
                                                        <div className="flex flex-col justify-center">
                                                            <h6 className="mb-0 text-sm leading-normal">
                                                                {item.name}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap border-b bg-transparent p-2 align-middle shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight">
                                                        {item.level}
                                                    </p>
                                                </td>
                                                <td className="whitespace-nowrap border-b bg-transparent p-2 align-middle shadow-transparent">
                                                    <p className="mb-0 text-xs font-semibold leading-tight">
                                                        {item.vocation}
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
