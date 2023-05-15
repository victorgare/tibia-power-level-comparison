import LineChart from '@/components/Chart/LineChart'
import LineChartModel from '@/components/Chart/Model/LineChartModel'
import Player from '@/components/PlayerForm/Model/Player'
import PlayerForm from '@/components/PlayerForm/PlayerForm'
import { useEffect, useState } from 'react'

export default function Home() {
    const [lineChart, setLineChart] = useState<LineChartModel[]>([])
    const [lowerLevelName, setLowerLevelName] = useState<string>('')
    const [highLevelName, setHighLevelName] = useState<string>('')

    const [errorMessages, setErrorMessages] = useState<string[]>([])
    const [firstPlayer, setFirstPlayer] = useState<Player>({
        name: 'Player A',
    } as Player)

    const [secondPlayer, setSecondPlayer] = useState<Player>({
        name: 'Player B',
    } as Player)

    useEffect(() => {
        calculate()
    }, [firstPlayer, secondPlayer])
    const calculate = () => {
        // create an array ordered by level
        const players = [firstPlayer, secondPlayer].sort(
            (a, b) => a.currentLevel - b.currentLevel
        )

        let lowerLevelPlayer = players[0]
        let highLevelPlayer = players[1]

        const isValid = validate(lowerLevelPlayer, highLevelPlayer)

        if (isValid) {
            let lowerTotalXp = calculateTotalXpFromLevel(
                lowerLevelPlayer.currentLevel
            )

            let highTotalXp = calculateTotalXpFromLevel(
                highLevelPlayer.currentLevel
            )

            let chart: LineChartModel[] = []
            let days = 1

            do {
                lowerTotalXp += lowerLevelPlayer.avgDailyExperience
                highTotalXp += highLevelPlayer.avgDailyExperience

                chart.push({
                    iteration: days,
                    lower: {
                        totalXp: lowerTotalXp,
                    },
                    higher: {
                        totalXp: highTotalXp,
                    },
                })
            } while (lowerTotalXp < highTotalXp)

            setLineChart(chart)
            setLowerLevelName(lowerLevelPlayer.name)
            setHighLevelName(highLevelPlayer.name)
        } else {
            setLineChart([])
        }
    }

    const calculateTotalXpFromLevel = (level: number) => {
        return (
            (50 * Math.pow(level, 3)) / 3 -
            100 * Math.pow(level, 2) +
            (850 * level) / 3 -
            200
        )
    }

    const validate = (
        lowerLevelPlayer: Player,
        highLevelPlayer: Player
    ): boolean => {
        setErrorMessages([])

        let customErrorMessage: string[] = []
        if (
            lowerLevelPlayer.avgDailyExperience <
            highLevelPlayer.avgDailyExperience
        ) {
            customErrorMessage.push(
                `${lowerLevelPlayer.name} won't pass ${highLevelPlayer.name}`
            )
        }

        setErrorMessages([...customErrorMessage])
        return customErrorMessage.length <= 0
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full max-w-4xl">
                {errorMessages.map((value, index) => {
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

                <form className="mb-4">
                    <div className="grid grid-cols-2 gap-4">
                        <PlayerForm
                            player={firstPlayer}
                            onChange={(value) => setFirstPlayer(value)}
                        />

                        <PlayerForm
                            player={secondPlayer}
                            onChange={(value) => setSecondPlayer(value)}
                        />
                    </div>
                </form>

                {lineChart.length > 1 ? (
                    <LineChart
                        firstDataSetLabel={lowerLevelName}
                        secondDataSetLabel={highLevelName}
                        lineChats={lineChart}
                    />
                ) : (
                    <></>
                )}
                <p className="text-center text-xs text-gray-500">
                    &copy;2023{' '}
                    <a href="https://github.com/victorgare">Victor Garé</a>
                </p>
            </div>
        </main>
    )
}
