export const square = (num) => {
    return num * num
}

export const squarePow = (num) => {
    if (num === 1) {
        return 1
    }
    return Math.pow(num, 2)
}