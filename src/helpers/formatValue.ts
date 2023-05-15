export const formatNumberWithCommas = (value: number | string): string => {
    const formattedValue = value
        .toString()
        .replace(/,/g, '')
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    return formattedValue
}

export const formatDecimal = (value: string | number): string => {
    const formattedValue = parseFloat(removeMask(value.toString()))

    return formattedValue.toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    })
}

export const removeMask = (value: string): string => {
    // we dived for 100 to ensure always a decimal value
    return Number(
        value.replaceAll('.', '').replaceAll(',', '').replaceAll('R$', '')
    ).toFixed(0)
}
