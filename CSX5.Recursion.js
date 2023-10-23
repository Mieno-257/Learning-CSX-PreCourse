
/*---------------Recursion -------------------- */

// ######### Challenge 1 Repeater ################

function repeater(char) {
  // set base case
  if (char.length === 5) return char
 
  // set recursive input string + first character of input string
  return repeater(char + char[0]);

}

// To check if you've completed the challenge, uncomment these console.logs!
 console.log(repeater('g'));
 console.log(repeater('j'));

 
 
 function repeater_2(char, n = 5) {
  //set base case.  The base case is when the function doesn't call itself again
  if (n <= 1) return char;
  //set recursive case. The recursive case is when the function call itself.
  //return char with char plus itself
  return char + repeater_2(char, n-=1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater_2('g')); // -> 'ggggg'
console.log(repeater_2('j'));// -> 'jjjjj'

// Question: if i count it up, from 1 ->5
// failed for several times.  Experiment later


// ######### Challenge 2 Factorial ################
function factorial(num) {
  // set base case
  if (num == 1) return num
  // set recursive case
  return num * factorial(num - 1)

}

// To check if you've completed the challenge, uncomment these console.logs!
 console.log(factorial(4)); // -> 24
 console.log(factorial(6)); // -> 720


// ######### Challenge 3 getLength ################
// Instruction: Get the length of an array using recursion without accessing its length property.
// method 1
function getLength(array) {
  let num = 1
  // set base case
  if (!array[0]) return 0
  // set recursive case
  return num + getLength(array.slice(1))
}

// To check if you've completed the challenge, uncomment these console.logs!
 console.log(getLength([1])); // -> 1
 console.log(getLength([1, 2])); // -> 2
 console.log(getLength([1, 2, 3, 4, 5])); // -> 5
 console.log(getLength([])); // -> 0

 
 // method 2
 function getLength_2(array, length = 0){
  if (!array[0]) return length
  // alterative: if (array[0] === undefined) return length

  // increase length if it is not zero
  length ++;
  // call getLength again, and pass in length
  return getLength(array.slice(1),length)
 }

 console.log(getLength_2([1, 3, 4, 5])); // -> 1
 console.log(getLength_2([1, 2, 3, 45, 23, 21, 10])); // -> 2
 console.log(getLength_2([1, 2, 3, 4, 5])); // -> 5
 console.log(getLength_2([])); // -> 0


 //############## Challenge 4： Pow ###############
 function pow(base, exponent) {
  // set base case
  if (exponent == 0) return 1

  // set recursive case
  return base * pow(base, exponent-1)
 }
 
 // To check if you've completed the challenge, uncomment these console.logs!
  console.log(pow(2, 4)); // -> 16
  console.log(pow(3, 5)); // -> 243

 
//############## Challenge 5： Flow ###############
function flow(input, funcArray) {
  let i = 0
  // set base case
  if(!funcArray[i])return input
  // set recursive case
  // 思路基本对，用slice切后面的array
  // 给一个初始array
  let output = funcArray[0](input)
    return flow(output, funcArray.slice(1))
  }
   
  // To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7

// Answer: https://tiffanynchau.hashnode.dev/challenge-flow


 //############## Challenge 6： shuffeCards ###############
     
/* - method 1 Regular for Loop */
function shuffleCards(topHalf, bottomHalf) {
// create an empty array to store the results
const result = []
// define the lengths
const length = Math.max(topHalf.length, bottomHalf.length)

// use for loop to push the elements to array
for (let i = 0; i < length; i++){
  if(topHalf[i]){
    result.push(topHalf[i])
  }
  if(bottomHalf[i]){
    result.push(bottomHalf[i])
  }
 }
return result
 }

// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
   /*-> ['Queen of Diamonds',
    //         'Jack of Hearts',
    //         'Five of Hearts',
    //         'Ten of Spades',
    //         'Ace of Spades',
    //         'Eight of Clubs',
    //       ]
    //   */


/* - method 2 Recursion, with initial state in the parameter */
// ---- My half-baked idea ----
// create an empty array to store the results
   /*const result = [];
  //let i = 0;
  // set base case
  // define the length
     const length = Math.max(topHalf.length, bottomHalf.length)
     if(!topHalf[length] || !bottomHalf[length]) 
     return  result.push(topHalf[0])

  // set recursive case
    return result.push(shuffleCards_2(topHalf.slice(1), bottomHalf.slice(1)))*/

    
function shuffleCards_2(topHalf, bottomHalf, results=[]) {
 //const results = [];
 if(topHalf.length === 0 && bottomHalf.length === 0)return results;
 if (topHalf.length!==0) {
    results.push(topHalf[0])
  } 
 if (bottomHalf.length!==0) {
    results.push(bottomHalf[0])
  }
  return shuffleCards_2(topHalf.slice(1), bottomHalf.slice(1), results);
      //return results
}

// UNCOMMENT TO TEST YOUR WORK
const topHalf_2 = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf_2 = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards_2(topHalf_2, bottomHalf_2));
    //   /*-> ['Queen of Diamonds',
    //         'Jack of Hearts',
    //         'Five of Hearts',
    //         'Ten of Spades',
    //         'Ace of Spades',
    //         'Eight of Clubs',
    //       ]
    //   */


/* - method 3 Recursion, with no initial state parameter*/
function shuffleCards_3(topHalf, bottomHalf) {
  const results = [];
  if(topHalf.length === 0 && bottomHalf.length === 0)return results;
  if (topHalf.length!==0) {
     results.push(topHalf[0])
   } 
  if (bottomHalf.length!==0) {
     results.push(bottomHalf[0])
   }
   return results.concat(shuffleCards_3(topHalf.slice(1), bottomHalf.slice(1)));
   // return results + shuffleCards_2(topHalf.slice(1), bottomHalf.slice(1))
   // 上面code思路对，但是merge两个array不是用+，而是用concat, 用spread operator， 用push
   //return results
 }
 
 // UNCOMMENT TO TEST YOUR WORK
 const topHalf_3 = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
 const bottomHalf_3 = ['Jack of Hearts', 'Ten of Spades'];
 console.log(shuffleCards_3(topHalf_3, bottomHalf_3));
     //   /*-> ['Queen of Diamonds',
     //         'Jack of Hearts',
     //         'Five of Hearts',
     //         'Ten of Spades',
     //         'Ace of Spades',
     //         'Eight of Clubs',
     //       ]
     //   */

/* ------<!Important Takeaway!!> ---- 
1. 初始值在parameter里，不用之前的值+recursion
   若不在，需要+ -----------

2. It is OK to Do "If{} If{}"
 */

//############## Challenge 7： Cascade ###############
// 此题重点学习！
/* Recursion way */
function cascade(number) {
  if (number === 0) return;
  const remain = Math.floor(number / 10);

  console.log(number);
  String(remain).length !== 1 ? cascade(remain) : console.log(remain);
  console.log(number);
}

/*---- ITERATIVE APPROACH ⏯ ---- */
function cascade_iterative(n) {
  const lasts = [];
  while (n) {
    lasts.push(n);
    console.log(n);
    n = Math.floor(n / 10);
  }
  lasts.length--;
  while (lasts.length) console.log(lasts.pop());
}


// // Uncomment to test your work!
cascade(111)
cascade_iterative(3423)
// // should print
// /*
// 111
// 11
// 1
// 11
// 111
// */

 /* const arr = num2arr(number)
  // set base case
  if(!arr[1]) return arr2num(arr[0])

  // set recursive case


}

function num2arr(num){
  return Array.from(String(num), Number) 
}

function arr2num(arr){
  return arr.reduce((accum, el) => (accum * 10) + el, 0)
}

let number = 12345;
var arr = Array.from(String(12345), Number);
//console.log(12345)
console.log(num2arr(number))
console.log(arr2num(arr))*/






