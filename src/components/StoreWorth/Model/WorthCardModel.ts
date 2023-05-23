import WorthCardImage from './WorthCardImage'

export default interface WorthCardModel {
    itemName: string
    tcAmount: number
    goldPrice: number
    itemQuantity: number
    image: WorthCardImage
}
