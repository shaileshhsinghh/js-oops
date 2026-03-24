class Student{
    //private variables use the #prefix

    #name;
    #rollNumber;
    #marks;
    #attendence;

    constructor(name,rollNumber,marks = 0,attendance = 0){
        this.#name = name;
        this.#rollNumber = rollNumber;
        this.#marks = marks;
        this.#attendence = attendance;
    }

    get name(){
        return this.#name;
    }

    get rollNumber(){
        return this.#rollNumber;
    }

    set marks(value){
        if(value>0 && value<=100){
            this.#marks = value;
        }
    }

    set attendence(value){
        if(value>0 && value<=100){
            this.#attendence = value;
        }
    }
}

module.exports = Student;