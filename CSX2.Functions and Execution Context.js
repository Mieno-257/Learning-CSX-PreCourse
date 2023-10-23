/*Functions and Execution Contexts*/ 

/* -------- Challenge 1:addTwo -------*/
// ADD CODE HERE
function addTwo(number){
  return number + 2
}

// Uncomment these to check your work!
 console.log(typeof addTwo); // should log: 'function'
 console.log(addTwo(10)); // should log: 12

 /*------- Challenge 2: addS ---------- */
 function addS(string){
   return string + "s"
 }
console.log(typeof addS); // should log: 'function'
console.log(addS('cat')); // should log: 'cats'

/*-------- Challenge 3: sayHello -------- */
function sayHello(string){
  return "Hi," + " " + string
}
console.log(sayHello('Mary')); // should log: 'Hi, Mary'
console.log(sayHello('Haley')); // should log: 'Hi, Haley'

/*-------- Challenge 4: wereAwesome --------- */
function wereAwesome(you, yourBuddy) {
  return yourBuddy + " " + "and" + " " + you + " " + "are awesome!"
}


// Uncomment the lines below to test your function:
 console.log(wereAwesome("Dave", "Will")); // => "Will and Dave are awesome!"
 console.log(wereAwesome("Victoria", "Jenny")); // => "Jenny and Victoria are awesome!"
 console.log(wereAwesome("Chris", "Jac")); // => "Jac and Chris are awesome!"
 console.log(wereAwesome("Phillip", "Skyler")); // => "Skyler and Phillip are awesome!"


 /*--------- Challenge 5: lastLetter ---------- */
function lastLetter(word) {
  // INSERT CODE HERE
  return word.slice(-1)
}

// Uncomment the lines below to test your code
console.log(lastLetter("hello")); //=> "o"
console.log(lastLetter("goodbye!")); //=> "!"
console.log(lastLetter("ZeltoiD")); //=> "D"
console.log(lastLetter("I love Javascript")); //=> "t"


/* ---------- Challenge 6: Passing Arguments -------- */
const x = 3;

function isX1(num) {
    const x = 5;
    return num === x;
}

function isX2(num) {
    return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true



/* ---------- Challenge 7: Invoking Functions (Return "undefined")----------- */
let calls = "";

function jerry(str) {
  kramer('Jerry');
}

function george(str) {
	calls = str + 'George';
  elaine(calls);
}

function elaine(str) {
  calls = str + 'Elaine';
}

function kramer(str) {
  calls = str + 'Kramer';
  george(calls)
}


// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);
console.log(calls);


/*---------Challenge 8: makePlans ----------- */
let friendsAvailable = true;

function makePlans(name) {
  // INSERT CODE HERE
  return callFriend(friendsAvailable,name);
}

function callFriend(bool, name) {
  // INSERT CODE HERE
  if (bool === true){
    return "Plans made with" + " " + name + " " + "this weekend"
  } else{
    return "Everyone is busy this weekend"
  }
}

// Uncomment these to check your work!
 console.log(makePlans("Mary")) // should return: "Plans made with Mary this weekend'
 friendsAvailable = false;
 console.log(makePlans("James")) //should return: "Everyone is busy this weekend."


 /*---------Challenge 9: Functions - Displays vs. Execution ----------- */
//Create a console log that displays the contents of the function rather than executing it. 
//For example, your result should be function add20 (num){ return num + 20 }.
 
function add20 (num){
  return num + 20
}

// CREATE YOUR CONSOLE.LOG BELOW 
console.log(add20.toString())

/*-------- Challenge 10: isOdd --------- */
// ADD CODE HERE
function isOdd (num){
  if(num % 2 === 0){
    return false
  }
  else{
    return true
  }
}

// Uncomment these to check your work!
 console.log(isOdd(5)); // should log: true
 console.log(isOdd(2008)); // should log: false

 /* -------Challenge 11: Control Flow - if statements & remainders --------- */
 // ADD CODE HERE
 function iLoveEvenNumbers(num){
  if(num % 2 === 0){
    return "Oh Yeah Evens!"
  }
  else{
    return "I am too normal for odd numbers"
  }
 }

// Uncomment these to check your work!
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'

/*-------- Challenge 12: getRemainder --------- */
function getRemainder(num1, num2) {
  // INSERT CODE HERE
  // Step 1: identify which number is larger
  // Step 2: large number divide small number
  if (num1 > num2) {
    return num1 % num2
  } else {
    return num2 % num1
  }
}

// Uncomment the lines below to test your code
 console.log(getRemainder(17, 5)); // => 2
 console.log(getRemainder(20, 5)); // => 0
 console.log(getRemainder(8, 22)); // => 6
 console.log(getRemainder(7, 42)); // => 0

 /*---------- Challenge 13: Control Flow --------*/
 /*----------Control Flow - If Statements & Multiple Conditions ---------- */
 function greetings(hour) {
  // ADD CODE HERE
  // if the hour is before 12 => Good morning
  // if the hour is before 15 => Good afternoon
  // if the hour is 15 or after => Good night!
  if (hour < 12){
    return "Good Morning!"
  } else if ( hour < 15){
    return "Good Afternoon!"
  } else if ( hour < 24 ){
    return "Good Night!"
  } else{
    // do nothing
  }

}

// Uncomment these to check your work!
 console.log(greetings(8)); // expected log 'Good Morning!'
 console.log(greetings(12)); // expected log 'Good Afternoon!'
 console.log(greetings(14)); // expected log 'Good Afternoon!'
 console.log(greetings(15)); // expected log 'Good Night!'
 console.log(greetings(18)); // expected log 'Good Night!'

 /*------- Challenge 14: gradeCalculator------- */
 function gradeCalculator(grade) {
  // ADD CODE HERE
  /*
  if(grade == 100 || grade >=90){
    return "A"
  }else if( grade >= 80 && grade <= 89){
    return "B"
  }else if( grade >= 70 && grade <= 79 ){
    return "C"
  }else if( grade >= 60 && grade <= 69){
    return "D"
  }else{
    return "F"
  } */
   
  if(grade >= 90){
    return "A"
  }else if( grade >= 80){
    return "B"
  }else if( grade >= 70){
    return "C"
  }else if( grade >= 60){
    return "D"
  }else{
    return "F"
  }
}

// Uncomment the lines below to test your code
 console.log(gradeCalculator(92)); // => "A"
 console.log(gradeCalculator(84)); // => "B"
 console.log(gradeCalculator(70)); // => "C"
 console.log(gradeCalculator(61)); // => "D"
 console.log(gradeCalculator(43)); // => "F"

 /* ----------- Challenge 15: Droids ------------ */
 function droids(arr) {
  /* 方法一 */
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == "Droids"){
      result = "Found Droids!"
    }else{
      result = "These are not the droids you're looking for."
    }
  }
  // ADD CODE HERE
  return result; 
  /*
  方法二 - challenge 17的方法
  if(arr.includes("Droids") === true){
    return "Found Droids!"
  }else{
    return "These are not the droids you're looking for"
  } */
}

// Uncomment these to check your work! 
 const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
 const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
 console.log(droids(starWars)) // should log: "Found Droids!"
 console.log(droids(thrones)) // should log: "These are not the droids you're looking for"

 /*------------ Challenge 16: Droids Using forEach ----------------- */
 function droids_forEach(arr) {
  let result = '';
  // before; for loop
  /*for (let i = 0; i < arr.length; i++) {
    if(arr[i] == "Droids"){
      result = "Found Droids!"
    }else{
      result = "These are not the droids you're looking for."
    }
  }*/
  // ADD CODE HERE
  // after: forEach
  arr.forEach((arr)=>
  {
    if(arr == "Droids"){
      result = "Found Droids!"
    }else{
      result = "These are not the droids you're looking for."
    }
  })
  return result;
}

// Uncomment these to check your work! 
 const starWars_forEach = ["Luke", "Finn", "Rey", "Kylo", "Droids"] 
 const thrones_forEach = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"] 
 console.log(droids_forEach(starWars_forEach)) // should log: "Found Droids!"
 console.log(droids_forEach(thrones_forEach)) // should log: "These are not the droids you're looking for"
 
 
 /*------------- Challenge 17: Short-Circuiting a Loop--------- */
 function holidays(arr) {
  // Do not use a variable to store your result 
  // ADD CODE HERE
  /* 方法一：includes
  if(arr.includes("October") === true){
    return "Happy Halloween"
  }else{
    return "Have a great day!"
  }*/
  /*方法二：for loop */
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "October"){
      return "Happy Halloween"
    }
  }
  return "Have a great day!"
}

// Uncomment these to check your work!
 const months = ["April", "May", "June", "October"];
 const animals = ["Cats", "Dogs", "Pigs"];
 console.log(holidays(months)); // should return: "Happy Halloween"
 console.log(holidays(animals)); // should return: "Have a great day!"

 /* ---------- Challenge 18: For Loops - Updating Array Elements ---------- */
 function addN(arr, n){
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++){
    arr[i] += n
  }
  return arr
} 

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

/*-------------- Challenge 19: makePlural ------------------- */
function makePlural(arr){
  // ADD CODE HERE
  for (let i = 0; i < arr.length; i++){
    arr[i] += "s"
  }
  return arr
} 


const arr1 = ['lion', 'tiger', 'bear']
const arr2 = ['computer', 'video game', 'system']

// Uncomment these to check your work!
 console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
 console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']

 /*------------ Challenge 20: For Loops - Summing Array Elements -------------- */
 function getTheSum(arr){
  // ADD CODE HERE
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}


// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33


/*-------------- Challenge 21: multiplyAll ------------------- */
// ADD CODE HERE 
/*const multiplyAll = (... num) => {  
  let product = 1
  for (let i = 0; i < num.length; i++){
    product = num[i]
  }
  return product
} */

function multiplyAll(...num){
  let product = 1
  for (let i = 0; i < num.length; i++){
    product *= num[i]
  }
  //return console.log(num)
  return product 
}

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)) // should log: 375


/* -------------- Challenge 22: Loops - Summing Two Arrays --------------- */
function mergingElements(array1, array2){
  // ADD CODE HERE
  let sum = 0;
  let newArr = [];
  for (let i = 0; i < array1.length; i++){
    sum = array1[i] + array2[i]
    newArr.push(sum)
  }
  return newArr
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]


/* ---------------- Challenge 23: Loops & Control Flow ------------------ */
function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
  let sum_merge = 0;
  let newArr_merge = [];
  for (let i = 0; i < array1.length; i++){
    if(array1[i] % 3 === 0 || array1[i] % 5 === 0){
      sum_merge = array1[i] + array2[i]
      newArr_merge.push(sum_merge)
    }else{
      newArr_merge.push(array1[i])
    }
  }
  return newArr_merge

 }
 
 // Uncomment these to check your work!
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

/* ---------------- Challenge 24: While Loops - Counter ------------------ */
function imAboutToExplodeWithExcitement(n){
  // ADD CODE HERE
  let count = n;
  while (count <= n && count >=0){
    if (count === 5 ){
      console.log("Oh wow, I can't handle the anticipation!")
    }else if (count === 3){
      console.log(" I'm about to explode with excitement!") 
    }else if(count === 0){
      console.log("That was kind of a let down")
    }else{
      console.log(count)
    }
    count --
  }
}

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'


/*-------------------- Challenge 25: Control Flow - if statements and the Math object --------------------- */
function closestToTheMark(player1, player2){
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
  if(Math.abs(player1-theMark) > Math.abs(player2-theMark)){
    return `Player 2 is closest`
  } else if(Math.abs(player1-theMark) <  Math.abs(player2-theMark)){
    return `Player 1 is closest`
  }
}
// Uncomment the line below to check your work!
 console.log(closestToTheMark(25, 75));

 /*----------------- Challenge 26: Loops - Range----------- */
 function getTheRange(arr){
  // ADD CODE HERE
  //return Math.min(...arr)
  let arrRange = []
  let arrMin = Math.min(...arr)
  arrRange.push(arrMin)
  let arrMax = Math.max(...arr)
  arrRange.push(arrMax)
  let arrDiff = arrMax - arrMin
  arrRange.push(arrDiff)
  return arrRange
}

// Uncomment these to check your work!
 console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

 
 /*----------------- Challenge 27: Loops - Multiple Conditions ------------- */
 function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE

  let sumOdd = 0
  let sumEven = 0

 // sum odd elements in array2
 // sum even elements in array2

  for (let i = 0; i < array2.length; i++){
    if(array2[i]%2 !== 0){
      sumOdd += array2[i]
    }else if(array2[i]%2 === 0){
      sumEven += array2[i]
    }
  }
 

  // write a boolean function to identify if array has any elements larger than 20
  function isLargerThan20(arr){
    if(arr.find(element => element > 20)){
      return true
    } else{
      return false
    }
  }
  
  // add the sumOdd to all the numbers under 10 in array1 
  // add the sumEven to all the numbers over 10 in array1

  for (let i = 0; i < array1.length; i++){
    if (array1[i] < 10){
      array1[i] = array1[i] + sumOdd
    } else if(array1[i] > 10){
      array1[i] = array1[i] + sumEven
    }
  }

  
  // search array two to identify if we need to add additional 1 to each element in array1
  if (isLargerThan20(array2) == true){
   for (let i = 0; i < array1.length; i++){
    array1[i] = array1[i] + 1
   } 
  }else{
    // do nothing
  }

  // return new array
  return array1

  // testing code
  //return isLargerThan20(array2)
  //return [sumOdd, sumEven]
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]


 /*----------------- Challenge 28:  - disemvowel ------------- */
 function disemvowel(string) {
  // ADD CODE HERE

  // find all vowels
  let vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  // remove them from the string
  let newString = ""
  for (let i = 0; i < string.length; i++) {
    if(!vowels[string[i].toLowerCase()]){
      newString += (string[i])
    }else{
      newString += ""
    }
  }

  return newString

}

// Uncomment these to check your work!
 console.log(disemvowel('CodeSmith')); // => 'CdSmth'
 console.log(disemvowel('BANANA')); // => 'BNN'
 console.log(disemvowel('hello world')); // => 'hll wrld'

 /*---------------- Challenge 29:  addWaldo------------------------- */

// ADD CODE HERE 
function addWaldo(obj){
  //obj['c'] = 3;
  // Object.assign(obj, { b: 2 }, { c: 3 });
 Object.assign(obj, {Waldo: 'unknown'})
 // object['Waldo'] = "unknown"
 return obj
}

// Uncomment these to check your work!
 const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
 //console.log(siliconValley)
 console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

 /*------------------ Challenge 30: findWaldo------------------ */
 // ADD CODE HERE
 // store results
let str = ""

// find Waldo
function findWaldo(obj){
  for(let key in obj){
    if (key !== 'Waldo') {
      str = 'Where\'s Waldo?'
    } else{
      str = obj['Waldo']
    } 
  }
  return str
}
 
// Uncomment these to check your work!
 const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
 const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
 console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
 console.log(findWaldo(supernatural)) // should log: 'unknown'

 /*--------------- Challenge 31: arrayBuilder ----------------------------------- */
 function arrayBuilder(obj) {
  // ADD CODE HERE

  /* Method 1: My Method 

  let arrResult = []

  // extract values of the key, use the values to count the key
  for (let i = 0; i < Object.keys(obj).length; i++) {
    let count = Object.values(obj)[i]
    //return count
    var arr = Array(count).fill(Object.keys(obj)[i])
    //return arr
    arrResult.push(...arr)

  }
 return arrResult
*/

/* Method 2: CodeSmith Method 
const outputArray = [];
for (let key in obj){
  let repeatCount = obj[key]
  //return repeatCount
  while(repeatCount > 0){
    outputArray.push(key)
    repeatCount--
  }
}
return outputArray*/


 /* Method 3: 结合1和2, 用我的思路 */

  let arrResult = []

  // extract values of the key, use the values to count the key
  for (let key in obj) {
    let count = obj[key]
    //return count
    var arr = Array(count).fill(key)
    //return arr
    arrResult.push(...arr)

  }
 return arrResult
}

// Uncomment these to check your work!
 console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
 console.log(arrayBuilder({})); // => []

 /*-------------- Challenge 32: Functions- Function Expression--------------------------------- */
 // MODIFY THE CODE BELOW 
function functionDeclaration() {
  return "Hi there!";
}

let myFunc = () => {
  return functionDeclaration()}


console.log(myFunc()) //should log: "Hi there!

/*-------------- Challenge 33: Convert ES5 -> ES6--------------------- */

/*ES5 */
/*function myJob (name, profession) {
  return `Hi, my name is ${name} and I'm a ${profession}.`
}*/

/*ES6 */
var myJob = (name, profession) => {
  return `Hi, my name is ${name} and I'm a ${profession}.` 
}

console.log(myJob("Jon", "Knights Watchman"));

/*Challenge from the workshop: Nested Loop */
const myNums = [1,2,3,4,5];
for(let i = 0; i < myNums.length; i++) {
  const num1 = myNums[i];

  for (let j=0; j< myNums.length; j++){
    const num2 = myNums[j]

    if(num1 + num2 === 7){
      console.log('Lucky Seven!')
    }else{
      // do nothing
    }
  }
}

/*Challenge: Create a function called objectLogger that takes in one argument (an Object). 
This function will not return anything but will log to the console the value of each property from the Object that was passed in as it’s argument.
Send the solution to Phillip Troutman in Slack CSX*/
/*√CS Prep: https://www.codesmith.io/apply/eyk9 */