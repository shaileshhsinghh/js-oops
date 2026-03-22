const student = require("./student");

student.college = "Netaji Subhas University";
student.course = "BCA";

Object.assign(student,{
    year : 2004,
    dateofadmission : 2024
})

console.log(student);
//delteing properties thourhg destructuring
let { age,year,...studentnew} = student;

console.log(studentnew);
