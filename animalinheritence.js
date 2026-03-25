class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    makesound(){
        console.log("some generic sound");
    }
}
class Dog extends Animal{
    constructor(name,age,breed){
        super(name,age);
        this.breed = breed;
    }

    makesound(){
        console.log("bow bow");
    }
}

module.exports = {Animal,Dog};