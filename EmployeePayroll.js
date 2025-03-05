class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

   
    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

const emp1 = new EmployeePayroll(101, "Anand Soni", 5000, "Male", "2023-05-10");
const emp2 = new EmployeePayroll(102, "Muskan Gupta", 7000, "Female", "2023-06-10");
const emp3 = new EmployeePayroll(103, "Ankit Patel", 9000, "Male", "2023-07-10");

console.log(emp1.getDetails());
console.log(emp2.getDetails());
console.log(emp3.getDetails());