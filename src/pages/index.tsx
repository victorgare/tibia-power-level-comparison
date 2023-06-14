import LineChart from '@/components/Chart/LineChart'
import LineChartModel from '@/components/Chart/Model/LineChartModel'
import Player from '@/components/PlayerForm/Model/Player'
import PlayerForm from '@/components/PlayerForm/PlayerForm'
import { useEffect, useState } from 'react'

import dejair from '../imgs/dejair.gif'
import bobeek from '../imgs/bobeek.gif'
import ErrorAlert from '@/components/Alerts/ErrorAlert'
import InfoAlert from '@/components/Alerts/InfoAlert'

export default function Home() {
    const [lineChart, setLineChart] = useState<LineChartModel[]>([])
    const [lowerLevelName, setLowerLevelName] = useState<string>('')
    const [highLevelName, setHighLevelName] = useState<string>('')

    const [errorMessages, setErrorMessages] = useState<string[]>([])

    const [firstPlayer, setFirstPlayer] = useState<Player>({
        name: 'Dejair Invencivel',
    } as Player)

    const [secondPlayer, setSecondPlayer] = useState<Player>({
        name: 'Bobeek',
    } as Player)

    useEffect(() => {
        const firstItem = JSON.parse(
            localStorage.getItem('firstPlayer') ?? 'null'
        ) as Player

        if (firstItem) {
            setFirstPlayer(firstItem)
        }

        const secondItem = JSON.parse(
            localStorage.getItem('secondPlayer') ?? 'null'
        ) as Player

        if (secondItem) {
            setSecondPlayer(secondItem)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('firstPlayer', JSON.stringify(firstPlayer))
        localStorage.setItem('secondPlayer', JSON.stringify(secondPlayer))

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
            } while (lowerTotalXp < highTotalXp && chart.length <= 730)

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
        <>
            <ErrorAlert messages={errorMessages} />

            <form className="mb-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <PlayerForm
                        player={firstPlayer}
                        onChange={(value) => setFirstPlayer(value)}
                        image={dejair}
                    />

                    <PlayerForm
                        player={secondPlayer}
                        onChange={(value) => setSecondPlayer(value)}
                        image={bobeek}
                    />
                </div>
            </form>
            {lineChart.length >= 730 && (
                <InfoAlert messages={['Only showing next 2 years']} />
            )}
            {lineChart.length > 1 ? (
                <div className="h-96 min-h-full">
                    <LineChart
                        firstDataSetLabel={lowerLevelName}
                        secondDataSetLabel={highLevelName}
                        lineChats={lineChart}
                    />
                </div>
            ) : (
                <></>
            )}
        </>
    )
}
