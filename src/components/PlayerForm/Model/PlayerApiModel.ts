import { CharacterApi } from './CharacterApi'

export interface PlayerApiModel {
    characters: {
        character: CharacterApi
    }
}
