export const formatPrice = (number) => {
    return new Intl.NumberFormat('ru', {
        style: "currency",
        currency: 'RUB'
    }).format(number / 10)
}

export const getUniqueValues = (data, type) => {
    let unique = data.map(item=>item[type])
    //т.к. colors - массив массивов => flat
    if (type === 'colors') {
        unique = unique.flat()
    }
    return ['all', ... new Set(unique)]
    console.log(unique)
}
