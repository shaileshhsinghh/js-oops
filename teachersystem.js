class Teacher {
    #salary;

    constructor(name, age, contactNo, empId, degree, salary) {
        this.name = name;
        this.age = age;
        this.contactNo = contactNo;
        this.empId = empId;
        this.degree = degree;
        this.#salary = salary;
    }

    teach() {
        console.log(`${this.name} is teaching`);
    }

    takeAttendance() {
        console.log(`${this.name} took the attendance`);
    }

    getSalary() {
        return this.#salary;
    }
}

class Hod extends Teacher {
    constructor(name, age, contactNo, empId, degree, salary, department) {
        super(name, age, contactNo, empId, degree, salary);
        this.department = department;
    }

    manageDept() {
        console.log(`${this.name} manages ${this.department}`);
    }
}

module.exports = { Teacher, Hod };