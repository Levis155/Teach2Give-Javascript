# Getters and Setters

Getters and Setters are special methods that allow controlled access to an object's properties.

They enable data encapsulation by restricting direct access and enforcing validation.

- Getters _get()_: retrieve a property value.
- Setters _set()_: Modifies a property value while allowing validation.

**Example of a class without getters and setters:**

```js
class User {
  constructor(name) {
    this.name = name; // this allows direct access to name variable
  }
}

const user = new User('Levis');
console.log(user.name); // logs Levis to the console

user.name = 5; // No validation, allows invalid data
console.log(user.name); // logs 5 to the console (Not ideal)
```
**Output:**

```
Levis
5
```

**In the above example, there is no control over setting the name, so invalid values like numbers can be assigned.**

**This can be resolved by using getters and setters as shown below:**

```js
class User {
    constructor(name) {
      this._name = name; // private property convention (_name)
    }
    
    // the getter retrieves the value
    get name() {
        return this._name;
    }

    //the setter validates and updates the value

    set name(newName) {
        if(typeof newName !== 'string') {
            console.log('Name must be a string');
            return;
        }

        this._name = newName;
    }
  }
  
  const user = new User('Levis');
  console.log(user.name); // logs Levis to the console
  
  user.name = 'Clive'; 
  console.log(user.name); // logs Clive to the console 

  user.name = 5; //logs the error message

```

**Output:**

```
Levis
Clive
Name must be a string
```