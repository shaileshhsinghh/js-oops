class Animal{
    sound(){
        console.log("make some sound");
    }
}

class dog extends Animal{
    //method overiding
    sound(){
        console.log("Woof Woof");
    }
    fetch(){
        console.log("Bring the ball");
    }
}

let a = new dog();
a.sound();

