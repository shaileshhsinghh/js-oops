class shape{
    area(){
        throw new Error("overide it");
    }

    describe(){
        console.log(`Area is : ${this.area()}`);
    }
}

class square extends shape{
    constructor(r){
        super();
        this.r = r;
    }
    area(){
        return this.r **2;
    }
}

class circle extends shape{
    constructor(r){
        super();
        this.r = r;
    }
    area(){
        return +(Math.PI * (this.r ** 2)).toFixed(2);
    }
}

const circle1 = new circle(4);
const sqaure1 = new square(4);

circle1.describe();
sqaure1.describe();