import { CharacterApiModel } from './CharacterApiModel'

export interface PlayerApiModel {
    characters: {
        character: CharacterApiModel
    }
}
