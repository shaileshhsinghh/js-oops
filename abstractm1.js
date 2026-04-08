class shape{
    constructor(){
        if(new.target === shape){
            throw new Error(`cannot be done abstract class`);
        }
    }
    calculateArea(r){
        return `Area is : ${this.area(r)}`;
    }
    area(r){
        throw new Error(`Override the Method`);
    }
}

class sqaure extends shape{
    area(r){
        return r**2;
    }
}

class circle extends shape{
    area(r){
        return Math.PI * r ** 2;
    }
}

const sq = new sqaure();
console.log(sq.calculateArea(5));