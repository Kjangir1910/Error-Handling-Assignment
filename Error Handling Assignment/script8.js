function student (name) {
    this.name = name 
}

student.prototype.printdetails = function () {
    console.log("hello my name is" + this.name);


}

const Student = new student(" Mithun")

console.log(Student.printdetails());