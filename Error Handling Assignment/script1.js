function convertToNumber (str) {
try {
    const result = Number(str)
    if (isNaN(result)) {
        throw new error ("Invalid number")
    }
    return result
} catch (error) {

    return "Invalid number"
}

}

console.log(convertToNumber("123"))
console.log(convertToNumber("ABC"))
