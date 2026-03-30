class Shape{
    area(){
        throw new Error('override it');
    }
}

class Sqaure extends Shape{
    area(value){
        let result = value * value;
        return result;
    }
}

class circle extends Shape{
    area(value){
        let result = Math.PI * value * value;
        return result;
    }
}

const shapes = [new Sqaure(),new circle()];
shapes.forEach(shapes => {
    console.log(shapes.area(5));
})