class protect{
    #private;
    constructor(privat){
        this.#private = privat;
    }
    get _private(){
        return this.#private;
    }
}

class learn extends protect{
    constructor(privat){
        super(privat);
    }
    test(){
        console.log(`${this._private}`);
    }
}


const l1 = new learn(6000);
l1.test();