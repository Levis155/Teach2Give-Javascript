# Encapsulation

This is the practice of bundling data(variables) and methods (functions) that operate on the data into a single unit(object), while restricting direct access to some details of the object.

Encapsulation in JavaScript is achieved using **private properties** (with the # syntax) and getters/setter methods.

```JavaScript
class BankAccount {
    #balance = 1200;

    constructor(name) {
        this.name = name;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`You deposited ${amount}. New balance is ${this.#balance}.`)
    }

    checkBalance() {
        console.log(`Current balance is ${this.#balance}.`)
    }

}


const account1 = new BankAccount('Levis');
account1.deposit(1000);
account1.checkBalance();
console.log(account1.balance);// is undefined because '#balance' is a private field
```
**Output:**
```
You deposited 1000. New balance is 2200.
Current balance is 2200.
undefined
```

**In the example above, we are bundling data (e.g., #balance) together with the methods that operate on the data (e.g., deposit and checkBalance) and we also restrict direct access to #balance using private properties.**