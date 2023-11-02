
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

