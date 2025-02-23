# Abstraction

Abstraction means hiding certain details that don't matter to the user and only showing essential features or functions.

Unlike encapsulation, which focuses on restricting access to data, **abstraction is about making interactions with objects simpler while keeping the internal logic hidden.**

For example, take a cell phone. We don't show details like _verifyTemperature()_, _verifyVolt()_, _frontCamOn()_, _frontCamOff()_ and so on. Instead we provide essential features which matter to user like _camera()_, _volumeBtn()_, and others.

**Example:**

```js
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

    withdraw(amount) {
        if(amount > this.#balance) {
            console.log(`Could not execute your withdrawal ${this.name} ☹ . Please enter an amount that is equal to or lower than ${this.#balance}.`);
        } else{
            this.#balance -= amount;
            console.log(`Withdrawn ${amount} successfully, ${this.name}. New balance is ${this.#balance}`);
        }
    }
}

const account1 = new BankAccount('Levis');

account1.deposit(10000);
account1.withdraw(15000);
account1.withdraw(3000);
```

**Output:**

```
You deposited 10000. New balance is 11200.
Could not execute your withdrawal Levis ☹ . Please enter an amount that is equal to or lower than 11200.
Withdrawn 3000 successfully, Levis. New balance is 8200
```

In this scenario the user only interacts with _withdraw()_ and _deposit()_ without having to know how calculations are done internally.

