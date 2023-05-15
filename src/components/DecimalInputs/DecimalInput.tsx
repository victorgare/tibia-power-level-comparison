import { formatDecimal, removeMask } from '@/helpers/formatValue'
import BaseFormatedInput from '../Base/BaseFormatedInput'
import { FormatedInputProps } from '../Base/Model/FormatedInputProps'

export default function DecimalInput(props: FormatedInputProps) {
    const formatFunctionHandler = (value: string | number) => {
        let floatValue = 0

        if (typeof value === 'number') {
            floatValue = value
        } else {
            floatValue = parseFloat(removeMask(value.toString()))
        }

        if (props.maxValue !== undefined && floatValue > props.maxValue) {
            value = props.maxValue
        }

        if (props.minValue !== undefined && floatValue < props.minValue) {
            value = props.minValue
        }

        return formatDecimal(value)
    }
    return (
        <>
            <BaseFormatedInput
                {...props}
                formatFunction={formatFunctionHandler}
            />
        </>
    )
}
