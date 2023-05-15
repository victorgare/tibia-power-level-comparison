import { InputProps } from './InputProps'
export interface FormatedInputProps extends Omit<InputProps, 'type'> {
    // return value masked
    // true = masked value
    // false unmasked
    masked?: boolean
    maxValue?: number
    minValue?: number
}
