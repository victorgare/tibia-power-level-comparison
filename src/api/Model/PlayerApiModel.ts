import { CharacterApiModel } from './CharacterApiModel'

export interface PlayerApiModel {
    character: {
        character: CharacterApiModel
    }
}
