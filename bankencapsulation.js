class Bank{
    #Balance;
    constructor(accountnumber,name,Bal=0){
        this.AccountNo = accountnumber;
        this.HolderName = name;
        this.#Balance = Bal;
    }

    //setter function for deposit
    deposit(value){
        if(value > 0){
            this.#Balance += value;
        }
        else Error("Invalid Amount");
    }

    //getter function for balancecheck
    balancecheck(){
        return this.#Balance;
    }

    //setter function for withdrawl
    withdrawl(value){
        if(this.#Balance > 0 && value <= this.#Balance){
            this.#Balance -= value;
        }
        else Error("Withdrawn Balance is either greater or smaller than AccountBalance");
    }
}

module.exports = Bank;