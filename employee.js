class Employee{
    constructor(initialsalary, totaldays){
        this.Salary = initialsalary;
        this.Month = totaldays;
        this.Workday = 0;
    }

    attend(){
        this.workdone();
    }

    workdone(){
        this.Workday += 1;
    }

    calculateSalary(){
        let eachdaypay = this.Salary / this.Month;
        let totalpay = eachdaypay * this.Workday; 
        
        return totalpay; 
    }
}

module.exports = Employee;