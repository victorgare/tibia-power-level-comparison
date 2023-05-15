import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import LineChart from './Model/LineChartModel'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Experience',
        },
    },
    maintainAspectRatio: false,
}

interface Props {
    lineChats: LineChart[]
    firstDataSetLabel: string
    secondDataSetLabel: string
}
export default function LineChart(props: Props) {
    var date = new Date()

    const labels = props.lineChats.map((item) => {
        date.setDate(date.getDate() + 1)
        return date.toLocaleDateString('pt-BR')
    })

    const data = {
        labels,
        datasets: [
            {
                label: props.firstDataSetLabel,
                data: props.lineChats.map((item) => {
                    return item.lower.totalXp
                }),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: props.secondDataSetLabel,
                data: props.lineChats.map((item) => {
                    return item.higher.totalXp
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <>
            <Line options={options} data={data} />
        </>
    )
}
