function getperson (personobject) {
    try {
        if(typeof personobject !== 'object' || personobject === null || ! ('name' in personobject) || ! ('age' in personobject)){
            throw new Error ("Invalid parameter type")
            
    } 
    const {name, age} = personobject
            return `Name: ${name}, Age: ${age} ` 
        } catch (error) {

            return error.message

        }

}
const validPerson = { name: "John", age: 30 };
console.log(getperson(validPerson));
const invalidperson = {name: "john"}
console.log(getperson(invalidperson));
