class car {
    constructor (company, model, year) {
        this.year = year
       
        this.company = company

        this.model = model
       
    }

    getDescription() {
        return `this is a year ${this.year} ${this.company} ${this.model}` 
    }
}

const myCar = new car("Skoda", "Rapid", 2023)

console.log(myCar.getDescription());