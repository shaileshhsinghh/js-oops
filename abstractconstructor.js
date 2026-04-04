
class Animal{
    constructor(name){
        if(new.target === Animal){
            throw new Error("Cannot be initialsed");
        }
        this.name = name;
    }
    speak(){
        throw new Error("Cannot be accessed");
    }
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal{
    speak(){
        console.log(`${this.name} Meows`);
    }
}

const animal1 = new Dog("bruno");

animal1.speak();