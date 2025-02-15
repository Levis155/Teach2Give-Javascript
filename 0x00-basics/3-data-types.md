# Data Types

Javascript has the following basic data types:

- **String**
- **Number**
- **Boolean**
- **Null**
- **Undefined**
- **Bigint**
- **Symbol**

## String
 
 Refers to a sequence of characters enclosed within single quotes, double quotes or backticks.

 ```js
 let firstName = "Levis";
 let lastName = 'Mbui';
 let userName = `levis_mbui`;
 ```

 ## Number

 Javascript has only one type of number which can store both integers and decimals

 ```js
 let age = 23; //Integer
 let price = 20.5; // Decimal
 let notAnumber = Nan; //Not a Number (invalid math operation)
 ```

 ## Boolean

 Booleans are often used for decision-making. A boolean value can either be **true** or **false**.

 ```js
 let isOverAge = true;
 let isUnderAge = false;
 ```

 ## Undefined

 This is a variable that has been declared but not initialized.

 ```js
 let nationality;
 console.log(nationality); //displays undefined
 ```

 ## null

 Unlike **undefined**, **null** is an intentional absence of a value.

 ```js
 let score = null; //no score yet
 ```

 ## BigInt

 Used for numbers beyond JavaScript’s Number **.MAX_SAFE_INTEGER (9,007,199,254,740,991)**.

 ```js
 let bigNumber = 12343668799778775678901288724560n; // "n" at the end makes it a BigInt
 console.log(bigNumber);
 ```

 ## Checking the type of a variable using the _type of_ operator
 ```js
 const name = 'Levis';
const age = 23;
const isKenyan = true;
const netWorth = 76452768286482468648246874684664846n;

console.log(typeof(name)); //string
console.log(typeof(age)); //number
console.log(typeof(isKenyan)); //boolean
console.log(typeof(networth)); //bigint
 ```