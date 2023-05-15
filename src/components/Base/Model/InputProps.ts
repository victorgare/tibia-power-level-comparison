export interface InputProps {
    id: string
    type: string
    label: string
    placeholder?: string
    value?: string | number
    onChange?: (value: string | number) => void
}
