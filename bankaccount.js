class Bank{
    constructor(intialBalance){
        this.TotalBalance = intialBalance;
    }
    deposit(amount){
        if(amount<0){
            return console.log("Amount cannot be negative");
        }
        this.TotalBalance += amount;
        return console.log(`The new balance after Deposit is : ${this.TotalBalance}`);
    }

    withdraw(amount){
        if(this.TotalBalance >= amount){
            this.TotalBalance -= amount;
            return console.log(`The New Balance after Withdraw is : ${this.TotalBalance}`);
        }
        return console.log("Insufficeint Balance");
    }

    balanceCheck(){
        console.log(`Total balance is : ${this.TotalBalance}`);
    }
}

module.exports = Bank;