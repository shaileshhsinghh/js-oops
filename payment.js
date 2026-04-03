class Payment{
    processpayment(){
        throw new Error('configure payments by overidding');
    }

    validatepayment(value){
        if(value>=0) throw new Error('Enter valid amount');
        else return true;
    }
}

class CreditCard extends Payment{
    processpayment(){
        console.log(`Payment done via ${this.constructor.name}`);
    }

    validatepayment(value){
        if(value<=0){
            throw new Error("Enter valid Amount");
        }
        else this.processpayment();
    }
}

class DebitCard extends Payment{
    processpayment(){
        console.log(`Payment done via ${this.constructor.name}`);
    }

    validatepayment(value){
        if(value<=0){
            throw new Error("Enter valid Amount");
        }
        else this.processpayment();
    }
}

class UPI extends Payment{
    processpayment(){
        console.log(`Payment done via ${this.constructor.name}`);
    }

    validatepayment(value){
        if(value<=0){
            throw new Error("Enter valid Amount");
        }
        else this.processpayment();
    }
}

class NetBanking extends Payment{
    processpayment(){
        console.log(`Payment done via ${this.constructor.name}`);
    }

    validatepayment(value){
        if(value<=0){
            throw new Error("Enter valid Amount");
        }
        else this.processpayment();
    }
}

module.exports = { Payment,CreditCard,DebitCard,NetBanking,UPI };