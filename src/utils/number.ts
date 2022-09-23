/**
 * Returns a string representing of the given number in fixed-point notation (default 2) with decimal seperator
 */ 
export const toFixedNumber = (number: number, decimals: number = 2) => {
    return number.toFixed(decimals).toLocaleString()
}

/**
 * Return a string representing of the given number in positive and fixed-point notation (default 2)
 * 
 */
export const toPositiveNumber = (number: number, decimals: number = 2) => {
    return number.toFixed(decimals).replace("-", "")
}