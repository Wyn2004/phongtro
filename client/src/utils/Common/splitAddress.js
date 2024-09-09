export const splitAddress = (address) => {
    let array = address.split(',')
    return `${array[array.length-2]}, ${array[array.length-1]}`
}