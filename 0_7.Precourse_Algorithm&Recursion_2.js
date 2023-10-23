 /* ##################################################
 ---------------------Day 7 Homework-----------------
 ####################################################*/
 /*----------------------
********POD************
----------------------*/

/* ---- Challenge 1 REGULAR ---*/




/*--------------------------------
*******CSBin Challenges *********
---------------------------------*/

////////////////////////////
//     Challenge 1
////////////////////////////

function product(arr, i = 0) {
    // set the base case
    // check the index
    //if it turns to 0, it indicates the array only has one element, then returns it value and stops there
    if (i === arr.length - 1) return arr[i];

    // set the recursive case
    // return arr[0] * product(arr.slice(1)) // insert recursive case here!
    // Recursion：n * product of all numbers before n
    return arr[0] * product(arr.slice(1))
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
   console.log(product([1, 2, 3, 4])); // -> 24
   console.log(product([1, 2, 3, 4, 5])); // -> 120
   console.log(product([4, 5, 6])); // -> 120

  


////////////////////////////
//     Challenge 2
////////////////////////////

function containsDuplicates(arr) {
    
    // Step 1: Create a new object
    const cache = {}

    // Step 2: 
      // a. Loop through the array
      // b. Add unique key and its accumulated value
      for (let i = 0 ; i < arr.length ; i++){
      if (!cache[arr[i]]){
          cache[arr[i]] = 1
      }
      else {
          cache[arr[i]] += 1
      }
    }

    //testing
    //return cache
    
    // Step 3
    // a. Loop through the object
    // b. if all the values equal to 1, return false;
    //    if not all the values equal to 1, return true;
    let boolean = false;
    const valueOfArray = Object.values(cache);
    valueOfArray.sort()
    //console.log(valueOfArray); 
    for (let i = 0; i < valueOfArray.length; i++) {
        if (valueOfArray[i] == 1){
            boolean = false;
        }else if (valueOfArray[i] != 1){
            // do nothing
            boolean = true
        }
    }
    return boolean;
}
  
  // To check if you've completed the challenge, uncomment these console.logs!
console.log(containsDuplicates([1, 2, 3, 4, 5, 6])); // -> false
console.log(containsDuplicates([1, 2, 3, 4, 5, 6, 3])); // -> true
console.log(containsDuplicates([])); // -> false

////////////////////////////
//     Challenge 3
////////////////////////////

function createFib() {
    const memo = {}
  
    function fib(n) {
      if (n === 0) return 0;
      if (n === 1) return 1;
      // add another base case;
  
      let fibn = fib(n-1) + fib(n-2);
      // what should we do with fibn
  
      return fibn
    }
  
    return fib
  }
  
  const memoFib = createFib();
  
  // To check if you've completed the challenge, uncomment these console.logs!
  // console.log(memoFib(0)); // -> 0
  // console.log(memoFib(5)); // -> 5
  // console.log(memoFib(37)); // -> 24157817
  
  // console.log(memoFib(45)); // only uncomment if you're sure that memoization is working!
  



  function createFunction() {

    function sayHello(){
      return console.log('hello');
    } 
    
    return sayHello
  }
  
  // /*** Uncomment these to check your work! ***/
  const function1 = createFunction();
  function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  
  function callback(){
    return console.log(input);
  }
  
  return callback;

}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();