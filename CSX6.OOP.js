
/* =========== Challenge 1: makePerson========== */
function makePerson(name, age) {
	// add code here
    return{
        name: name,
        age: age
    }
}

const vicky = makePerson('Vicky', 24);


// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24


/* =========== Challenge 2: personStore========== */
const personStore_c2 = {
	// add code here
    greet: function(){
        console.log('hello')
    } 
};

// Uncomment this line to check your work!
personStore_c2.greet(); // -> Logs 'hello'


/* =========== Challenge 3: personStore========== */
const personStore = {
    greet: function() {
      console.log('hello');
    }
  }
  
  function personFromPersonStore(name, age) {
      // add code here
    const person = Object.create(personStore);
    person.name = name;
    person.age = age
  
    return person // do remember to return
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // Uncomment these lines to check your work!
  console.log(sandra.name); // -> Logs 'Sandra'
  console.log(sandra.age); // -> Logs 26
  sandra.greet(); // -> Logs 'hello'

/**=================Challenge 4: Introduce ============= */
const personStore_c4 = {
    greet: function() {
      console.log('hello');
    }
  }

  function personFromPersonStore_c4(name, age) {
    const person = Object.create(personStore_c4);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra_c4 = personFromPersonStore_c4('Sandra', 26);
  
  // add code here
  function introduce(){
    console.log(`Hello, my name is ${this.name}`);
  }

  personStore_c4.introduce = introduce
  
  // Uncomment this line to check your work!
   sandra_c4.introduce(); // -> Logs 'Hi, my name is Sandra'


/*========Challenge 5: PersonConstructor ========== */
function PersonConstructor() {
	// add code here
    this.greet = function(){
        console.log('hello')
    };
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
 simon.greet(); // -> Logs 'hello'


/*========Challenge 6: personFromConstructor======= */
function PersonConstructor_c6() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	// add code here

    const person = new PersonConstructor_c6();
    person.name = name;
    person.age = age;
    return person;
}

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
 console.log(mike.name); // -> Logs 'Mike'
 console.log(mike.age); // -> Logs 30
 mike.greet(); // -> Logs 'hello'


/*========Challenge 7: introduce(cont.)======= */

function PersonConstructor_c7() {
    this.greet = function() {
      console.log('hello');
    }
  }
  
  function personFromConstructor_c7(name, age) {
    const person = new PersonConstructor_c7();
    person.name = name;
    person.age = age;
    return person;
  }
  
  const mike_c7 = personFromConstructor_c7('Mike', 30);
  
  // add code here
  function introduce_c7(){
    console.log(`Hello, my name is ${this.name}`);
  }

  mike_c7.introduce = introduce_c7
  
  
  // Uncomment this line to check your work!
   mike_c7.introduce(); // -> Logs 'Hi, my name is Mike'


   /*===========Challenge 8 Inventory============ */
    /* Psuedo codes
    1. make sure the Inventory return an object
    2. In this object, each item is an object, with its price and quantity
    3. create deleteItem method
    4. create addItem method
    5. create isCheck
    */
   function Inventory(item, price) {
    // add code here
     this[item] = {
        price: price,
        quantity: 1
    }
  }
  
  const myInventory = new Inventory('cucumber', 2);
  console.log(myInventory)

  /*function addItem(item,price) {
    if(this.hasOwnProperty(item)){
        this[item].quantity += 1;
        this[item].price = price;
        }
    else{
        this[item] = {
            price: price,
            quantity: 1
         }
    }
}*/

 // myInventory.addItem = addItem

  

  // Uncomment these lines to check your work!
  // myInventory.addItem('carrot', 1);
  // console.log(myInventory)
  // console.log(myInventory.checkItem('cucumber')); // Logs: { price: 2, quantity: 1 }
  // myInventory.addItem('cucumber', 3); 
  // console.log(myInventory.deleteItem('carrot')); // Logs: 'Deleted'
  // console.log(myInventory.deleteItem('carrot')); // Logs: 'Nothing to delete'
  // console.log(myInventory); // Logs: { cucumber: { price: 3, quantity: 2 }, carrot: { price: 1, quantity: 0 } }
  // console.log(myInventory.checkItem('radish')); // Logs: 'Item is not in inventory'