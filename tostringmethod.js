class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    toString(){
        return `Animal : ${this.name}, Age : ${this.age}`;
    }
}

const a = new Animal("Dog", 5);
console.log(a.toString());
console.log(`${a}`);
console.log(a);