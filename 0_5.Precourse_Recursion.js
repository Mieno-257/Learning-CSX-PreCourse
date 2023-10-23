
// Example
function factorial(num){
    if(n <= 1) return 1;
    return num * factorial(num-1);
}
console.log(factorial(5));

//     Challenge 1
////////////////////////////

function repeater(char, n = 5) {
    //set base case.  The base case is when the function doesn't call itself again
    if (n <= 1) return char;
    //set recursive case. The recursive case is when the function call itself.
    //return char with char plus itself
    return char + repeater(char, n-=1);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(repeater('g')); // -> 'ggggg'
  console.log(repeater('j'));// -> 'jjjjj'
  
  // Question: if i count it up, from 1 ->5
  // failed for several times.  Experiment later


////////////////////////////
//     Challenge 2
////////////////////////////


function isEven(n) {
    //set base case
    if (n % 2 == 0) return true;
    return false;
    // return true if a number is even
   }
   
   // To check if you've completed the challenge, uncomment these console.logs!
    console.log(isEven(0)); // -> true
    console.log(isEven(5)); // -> false
    console.log(isEven(10)); // -> true
   

////////////////////////////
//     Challenge 3
////////////////////////////



function factorial(num) {
    //set base case
    if (num <= 1) return 1;
    //return num + the function paired with the num again minus 1
    return num * factorial(num - 1);
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(factorial(4)); // -> 24
  console.log(factorial(6)); // -> 720
  console.log(factorial(0)); // -> 1
  
  // To check if you've completed the challenge, uncomment these console.logs!
  // console.log(factorial(4)); // -> 24
  // console.log(factorial(6)); // -> 720
  // console.log(factorial(0)); // -> 1
  
  
  ////////////////////////////
  //     Challenge 4
  ////////////////////////////
  
  
  function getLength(array, i = 0) {
  
    //set base case 
  if (!array[i]) return i;
  i++
  return getLength(array, i);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5,])); // -> 5
  // To check if you've completed the challenge, uncomment these console.logs!
  // console.log(getLength([1])); // -> 1
  // console.log(getLength([1, 2])); // -> 2
  // console.log(getLength([1, 2, 3, 4, 5])); // -> 5
  
  
  ////////////////////////////
  //     Challenge 5
  ////////////////////////////
  
  
  function pow(base, exponent) {
    //set base case
    // return the base number
     if (exponent <= 1 ) return base;
    //return base * the function pairing base minus 1
    return base * pow (base, exponent - 1);
  
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(pow(2, 4)); // -> 16
  console.log(pow(3, 5)); // -> 243
  
  ////////////////////////////
  //     Challenge 6
  ////////////////////////////
  
  
  function flow(input, funcArray, i = 0) {
 
  }
  
  // To check if you've completed the challenge, uncomment this code!
   function multiplyBy2(num) { return num * 2; }
   function add7(num) { return num + 7; }
   function modulo4(num) { return num % 4; }
   function subtract10(num) { return num - 10; }
   const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
   console.log(flow(2, arrayOfFunctions)); // -> -7
  
  
  
  ////////////////////////////
  //     Challenge 7
  ////////////////////////////
  
  
  function fib(n) {
  
  }
  
  // To check if you've completed the challenge, uncomment this code!
  // console.log(fib(1)); // -> 1
  // console.log(fib(2)); // -> 1
  // console.log(fib(7)); // -> 13
  
  ////////////////////////////
  //     Challenge 8
  ////////////////////////////
  
  function headsOrTails(n) {
  
  }
  
  // To check if you've completed the challenge, uncomment this code!
  // console.log(headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
  // console.log(headsOrTails(3));
  // -> [
  //   ['heads', 'heads', 'heads'],
  //   ['heads', 'heads', 'tails'],
  //   ['heads', 'tails', 'heads'],
  //   ['heads', 'tails', 'tails'],
  //   ['tails', 'heads', 'heads'],
  //   ['tails', 'heads', 'tails'],
  //   ['tails', 'tails', 'heads'],
  //   ['tails', 'tails', 'tails'],
  // ]
  
  ////////////////////////////
  //     Challenge 9
  ////////////////////////////
  
  function getAllCombos(arr) {
  
  }
  
  // To check if you've completed the challenge, uncomment this code!
  // console.log(getAllCombos(['a', 'b'])); // -> [['a','b'], ['a'], ['b'], []]
  // console.log(getAllCombos(['a', 'b', 'c']));
  // -> [
  //   ['a', 'b', 'c'],
  //   ['a', 'b'],
  //   ['a', 'c'],
  //   ['a'],
  //   ['b', 'c'],
  //   ['b'],
  //   ['c'],
  //   [],
  // ]
  