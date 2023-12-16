function numberchecker (numbersArray) {
    return function (checknumber) {
        return numbersArray.includes(checknumber)
    }
}


const Array = [1, 2, 3, 4, 5 ]
const checkthenumber = numberchecker(Array)

console.log(checkthenumber(3));
console.log(checkthenumber(9));