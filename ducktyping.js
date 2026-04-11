//making an interface using object
const Serializeable = {
    serialize(obj){
        throw new Error('Not implemented');
    },
    deserialize(obj){
        throw new Error('Not implemented');
    },
};

function check(clas,objec){
    for(const method of Object.keys(objec)){
        if(typeof clas.prototype[method] !== "function"){
            return false;
        }
    }
    return true;
}

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    serialize(obj){
        return JSON.stringify(obj);
    }
    deserialize(obj){
        return JSON.parse(obj);
    }
}


console.log(check(User,Serializeable));