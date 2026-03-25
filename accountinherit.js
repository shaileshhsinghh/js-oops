class Account{
    #Balance;
    constructor(name,number,balance = 0){
        this.Name = name ;
        this.AccountNumber = number ;
        this.#Balance = balance;
    }

    deposit(value){
        if(value>0){
            this.#Balance += value;
        }
        else throw new Error("Invalid Amount");
    }

    withdraw(value){
        if(value<=this.#Balance && value>=0){
            this.#Balance -= value;
        }
        else throw new Error("Invalid Amount");
    }

    get(){
        return this.#Balance;
    }
}
class SavingsAccount extends Account{
    constructor(name,number,balance){
        super(name,number,balance);
    }

    showBalance(){
        console.log(super.get());
    }
}

class CurrentAccount extends Account{
    constructor(name,number){
        super(name,number);
    }

    getloan(value){
        let intrest = (value*1*6)/100;
        console.log(`Loan is ${value} and instrest to be paid is ${intrest}`);
    }
}

module.exports = {Account,SavingsAccount,CurrentAccount};
