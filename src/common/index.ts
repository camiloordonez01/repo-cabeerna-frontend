export const currencyFormatter = (value: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: 'USD',
    })
    return formatter.format(value)
}

export const percentageFormatter = (value: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 1,
    })
    return formatter.format(value)
}

export const titleProductFormatter = (value: string) => {
    const splitValue = value.split(' ')

    let newValue = splitValue[0]

    if (splitValue.length > 1) {
        newValue = `${newValue} ${splitValue[1].substring(0, 1)}.`
    }

    return newValue
}
