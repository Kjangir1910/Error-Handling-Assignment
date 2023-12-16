class Employee {
    constructor(name, positon, salary){
        this.name = name
        this.positon = positon
        this.salary = salary
    }

    getSalary (){
        return `employee's salary ${this.salary}`
    }
}

const employee1 = new Employee("Raj", "CCE", 80000)

console.log(employee1.getSalary());