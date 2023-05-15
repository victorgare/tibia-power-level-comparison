import PlayerChartModel from './PlayerChartModel'

export default interface LineChartModel {
    iteration: number
    lower: PlayerChartModel
    higher: PlayerChartModel
}
