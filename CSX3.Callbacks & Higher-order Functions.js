
/*---------------Example 1: Callback & High-Order Functions -------------------- */
const array = [1, 2, 3];

function update(callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    const updated = callback(array[i]);
    output.push(updated);
  }

  return output;
}

// Callback functions
function add10(num) {
  return num + 10;
}

function multiplyBy20(num) {
  return num * 20;
}

function stringify(num) {
  return num.toString();
}

// Call update with each callback function
console.log(update(add10)) // returns [11, 12, 13]
console.log(update(multiplyBy20)) // returns [20, 40, 60]
console.log(update(stringify)) // returns [‘1’, ‘2’, ‘3’]



/*--------------- Example 1: Why need a function -------------------- */
const array_example1 = [1, 2, 3];
const output_example1 = [];

for (let i = 0; i < array_example1.length; i++) {
  const updated = array_example1[i] + 10;
  output_example1.push(updated);
}

console.log(output_example1); // prints [11, 12, 13]


/* The above function is fine if we just have one additional number. 
How about we have multiple numbers? The code will be dirty if we keep duplicating the same code blocker.
Therefore, we shall use function */
const array_example2 = [1, 2, 3];

function addNum_example2(num) {
  const output_example2 = [];
  for (let i = 0; i < array_example2.length; i++) {
    const updated = array_example2[i] + num;
    output_example2.push(updated);
  }

  return output_example2;
}

console.log(addNum_example2(10)); // prints [11, 12, 13]
console.log(addNum_example2(20)); // prints [21, 22, 23]


/*-------------------- Challenge 1: Pluralize ------------------------------------*/
// ADD CODE HERE
function pluralize(noun){
    let nounPlurals = [];
    for (let i = 0; i < noun.length; i++){
        noun[i] +=  's'
        nounPlurals.push(noun[i])
    }
    return nounPlurals
}

// Uncomment these to check your work!
 const animals = ["dog", "cat", "tree frog"];
 console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]


 /*------------------ Challenge 2: Map------------------------------ */
 // ADD CODE HERE
 function subtractTwo(num){
    return num - 2;
 }

 function map(arr,callback){
    let updated = [];
    for (let i = 0; i < arr.length; i++){
        updated.push(callback(arr[i]))
    }
    return updated
 }

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

/*------------------ Challenge 3: ForEach--------------------------------  */

// ADD CODE HERE

function forEach(arr,callback){
  // iterate through our array with a for loop
  for(let i=0;i<arr.length;i++){
    // invoke the callback function, passing in the current array elements
    callback(arr[i]);
  }
}

function map(arr,callback){
  
  /*错误1： 思路对，写错了
  let result = [];
  let num = callback(forEach(arr, element => element ))
  result.push(num)*/
  
  /* 
  错误2： forEach可以直接写function
  let result = []
  forEach(arr, element => element){
    result.push(callback(element));
  }
  
  return result;*/

  // initialize a new array
  let result = [];

  // call forEach with the passed in array and a new function that will take an array element
  forEach(arr, function(element){

    // invoke the passed in callback function with the current array element given to us by forEach
    result.push(callback(element))
  })

  // add the return value to our array
  return result;

}

// Uncomment these to check your work!
 console.log(typeof forEach); // should log: 'function'
 forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'

 /* Notes of my misunderstanding.
for Each(arr, callback)
I am wondering what is the callback function?
In pre-provided code, callback is written in in the bracket, which is "i=>console.log(i)"
In the original format, the "i => console.log(i)" is an anonymous function, written in this way:
(function(i)){
  console.log(i)
}
 */

console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

/*------------------ Challenge 4: Filter Array -------------------- */
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}
const arrOfNums = [1, 2, 3, 4, 5];
function func1(num) {
  // ADD CODE HERE
  if(num % 2 == 0){
    return true;
  }else{
    return false;
  }
}

function func2(num) {
  // ADD CODE HERE
  if (num % 2 != 0){
    return true;
  }else if (num % 2 == 0){
    return false;
  }
}

// Uncomment these to check your work!
 console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
 console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]


/*------------------- Challenge 5: eitherFilter ----------------  */
function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
  
  // create an array to restore the result
  const result = [];

  // Go through each element
     // if the element meets the requirement of callback1, push it to the result array
     // if the element meets the requirement of callback2, also push it to the result array
     // else do nothing

  for (var i = 0; i < array.length; i++){

    /* Method 1*/
    if(callback1(array[i]) || callback2(array[i])){
      result.push(array[i]); 
    }

    /* Method 2 
    if (callback2(array[i])){
      result.push(array[i]);
    } else if (callback1(array[i])){
      result.push(array[i]);
    } else {
      // do nothing
    }*/

    /*错误示范1
    if (callback2(array[i]) == true){
      result.push(array[i]);
    } else if (callback1(array[i == true])){
      result.push(array[i]);
    } else {
      // do nothing
    }

    /*错误示范2
    if(callback1(array[i]) == true || callback2(array[i]) == true){
      result.push(array[i]); 
    }
     */
  }
 return result;

}

// Uncomment these to check your work!
 const arrOfNums_c5 = [10, 35, 105, 9];
 const integerSquareRoot_c5 = n => Math.sqrt(n) % 1 === 0;
 const over100_c5 = n => n > 100;
 console.log(eitherFilter(arrOfNums_c5, integerSquareRoot_c5, over100_c5)); // should log: [105, 9]


/*------------------- Challenge 6: eitherCallback ----------------  */
/*Need Revision */
function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  // return a function that
  return (element, i, array) => {
      // return the boolean representing whether either callback returns true
    return callback1(element, i, array) || callback2(element, i, array)
  }
}

// Uncomment these to check your work!
 function filterArray_c6(array, callback) {
   const newArray = [];
   for (let i = 0; i < array.length; i += 1) {
     if (callback(array[i], i, array)) newArray.push(array[i]);
   }
   return newArray;
 }
 const arrOfNums_c6 = [10, 35, 105, 9];
 const integerSquareRoot_c6 = n => Math.sqrt(n) % 1 === 0;
 const over100_c6 = n => n > 100;

 const intSqRtOrOver100_C6 = eitherCallback(integerSquareRoot_c6, over100_c6);
 console.log(filterArray_c6(arrOfNums_c6, intSqRtOrOver100_C6)); // should log: [105, 9]


 /*----------------- Challenge 7: Reduce --------------------*/
 // ADD CODE HERE
 function reduce(arr, callback, init){
  let accumulator = init;
  for (let i = 0; i < arr.length; i++){
    accumulator = callback(accumulator, arr[i])
  }
  return accumulator
 }

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; } // const add = (a,b) => {return a + b}
console.log(reduce(nums, add, 0)); // should log 8


/*------------------ Challenge 8: Intersection ----------------- */
// ADD CODE HERE

  
  // create an array to store the result, and it shall starts from the current array
  // Create a for loop
  // Compare current loop to the accumulator, to see if they have intersection
  // if there is, store it in the accumulator
  // then we update the accumulator

  //intersection([[5,10, 15,20], [15, 88, 1, 5,7], [1, 10, 15, 5, 20]])

/* My Research Method */
/*function intersection(arrays){

  let accumulator = arrays[0];
  for (let i = 0; i < arrays.length; i++){
    accumulator = arrays[i].filter(x => accumulator.includes(x))
    // for the current array, select the elements that has been intersected with accumulator
    // array[i].filter(x => expression) (filter each element that ....)
    // expression equals to the accumulatorList that includes the element from the current array.
    // "x" presents they will go through individual elements of the current array
  }
  return accumulator
}

// Uncomment these to check your work!
 const arr1 = [5, 10, 15, 20];
 const arr2 = [15, 88, 1, 5, 7];
 const arr3 = [1, 10, 15, 5, 20];
 console.log(intersection(...[arr1, arr2, arr3])); // should log: [5, 15]

// ===== Method Best=======
//const intersection2 = (xs,ys) => xs.filter(x => ys.some(y => y === x));
//const intersection = (xs,ys,...rest) => ys === undefined ? xs : intersection(intersection2(xs,ys),...rest);

 
}*/

/*CodeSmith Method */
function intersection(arrays){
  let accumulator = arrays.pop();
  while(arrays.length){
    const current = arrays.pop();
    const newArr = [];

    current.forEach((element) => {
      if(accumulator.includes(element)) newArr.push(element);
    })
    accumulator = newArr;
  }
  return accumulator
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
//const arr4 = [5,23,24,25,35]
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]




/* ---- Study Material --------------
 const array1 = ["Lorem", "ipsum", "dolor"];
 const array2 = ["Lorem", "ipsum", "quick", "brown", "foo"];
 const array3 = ["Jumps", "Over", "Lazy", "Lorem"];
 const array4 = [1337, 420, 666, "Lorem"];
 
 const arrayOfArrays = [[4234, 2323, 43], [1323, 43, 1313], [23, 34, 43]];
 
 // Filter xs where, for a given x, there exists some y in ys where y === x.
 const intersect2 = (xs,ys) => xs.filter(x => ys.some(y => y === x));
 
 // When there is only one array left, return it (the termination condition
 // of the recursion). Otherwise first find the intersection of the first
 // two arrays (intersect2), then repeat the whole process for that result
 // combined with the remaining arrays (intersect). Thus the number of arrays
 // passed as arguments to intersect is reduced by one each time, until
 // there is only one array remaining.
 const intersect = (xs,ys,...rest) => ys === undefined ? xs : intersect(intersect2(xs,ys),...rest);
 
 console.log(intersect(array1, array2, array3, array4));
 console.log(intersect(...arrayOfArrays));
 */



 /*-------------------- Challenge 9: Union ---------------------- */
 // ADD CODE HERE

/*
My Method - Pesudo Code-
• combine all arrays together 
• remove the duplicated ones
*/
/*
function union(arrays){
  let arrayResult = [];
  for(let i=0; i<arrays.length; i++){
    arrayResult = arrayResult.concat(arrays[i])
  }
  return [... new Set(arrayResult)] // remove the duplicated elements from the united function
}*/

/* CodeSmith Methods */
/* incremental adding */
function union(arrays){
  return arrays.reduce((outputArray, currentArray) => {
    currentArray.forEach(element =>{
      if(!outputArray.includes(element)){
        outputArray.push(element);
      }
    })
    return outputArray;
  },[]) 
}

// Uncomment these to check your work!
const arr1_c9 = [5, 10, 15];
const arr2_c9 = [15, 88, 1, 5, 7];
const arr3_c9 = [100, 15, 10, 1, 5];
console.log(union([arr1_c9, arr2_c9, arr3_c9])); // should log: [5, 10, 15, 88, 1, 7, 100]

/* ---------------- Challenge 10： objOfMatches ---------------- */

// ADD CODE HERE
function objOfMatches(arr1, arr2, callback) {
  // create an empty object 
  let objResult = {}

  // check arr1 to see if its related index equal to the arr2 with upper case?
  // if yes, add it to the new object
  for (let i = 0; i < arr1.length; i++) {
    if(callback(arr1[i]) === arr2[i]) {
      objResult[arr1[i]] = arr2[i];
    }
  }

  return objResult

}

// Uncomment these to check your work!
 const arr1_c10 = ['hi', 'howdy', 'bye', 'later', 'hello'];
 const arr2_c10 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
 function uppercaser(str) { return str.toUpperCase(); }
 console.log(objOfMatches(arr1_c10, arr2_c10, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

 /* ------------- Challenge 11: arrToObj ------------------------ */
 function arrToObj(array, callback) {
  // ADD CODE HERE

  // add an empty object to the array
  let objResult = {}

  // for each element, translate it to UpperCase
  // add the original as key and the translated upperCase as value
  for (let i = 0; i < array.length; i++){
    objResult[array[i]] = callback(array[i])
  }
  return objResult;
}

// Uncomment these to check your work!
 const arrOfStrings = ['beer', 'glue'];
 const capitalize = str => str.toUpperCase();
 console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

 /*-------------- Challenge 12: joinAndMap ---------------------  */
 // ADD CODE HERE
 function joinAndMap(arr1, arr2, callback){
  let arrResult = [];
  arrResult = arr1.concat(arr2)
  for (let i = 0; i < arrResult.length; i++){
    arrResult[i] = callback(arrResult[i])
  }
  return arrResult
 }

// Uncomment these to check your work!
 const arrRed = ['strawberry', 'cherry', 'wine'];
 const arrBlue = ['blueberry', 'sky', 'ocean'];
// console.log(joinAndMap(arrRed, arrBlue))
 const capitalize_c12 = str => str.toUpperCase();
 console.log(joinAndMap(arrRed, arrBlue, capitalize_c12)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']


 /*---------------- Challenge 13: multiMap --------------------- */
 // ADD CODE HERE
 // Yada! Completed for the first run!

 function multiMap(arr1, arr2){
  /* arr1 is an array of values
     arr2 is an array of callbacks
  */

// create an empty object
let objResult = {}

// for each arr1, invoke each function in the function array (arr2)
for (let i = 0; i < arr1.length; i++){
  let temp = arr1[i]
  let tempArr2 = []
  // invoke arr2 and create a new array
  for (let j = 0; j < arr2.length; j++){
    tempArr2.push(arr2[j](temp))
  }
  objResult[arr1[i]] = tempArr2
}
return objResult
}

// Uncomment these to check your work!
 function uppercaser_c13(str) { return str.toUpperCase(); }
 function capitalize_c13(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
 function repeater_c13(str) { return str + str; }
 const items = ['catfood', 'glue', 'beer'];
 const functions = [uppercaser_c13, capitalize_c13, repeater_c13];
 console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


 /*------------------ Challenge 14: majority ------------------- */
 // ADD CODE HERE
 function majority(arr, callback){
  // for each element in the array, use the callback function to test if it is old
  // use a counter to count the number of true; use a counter to count the number of false
  // if the true # > false # => true
  // if the true # = false # => false
  // if the true # < false # => false

  let counterOdd = 0
  let counterEven = 0

  arr.forEach(element => {
    if(callback(element) == true){
      counterOdd = counterOdd +1
    } else if(callback(element) == false){
      counterEven = counterEven +1
    }
  })
  /*before
  if (let i = 0; i < arr.length; i++){
    if...else if
  }
  */

  //return[counterOdd, counterEven]
  if(counterOdd > counterEven){
    return true
  }else if (counterOdd = counterEven || counterOdd < counterEven){
    return false
  }
 }

// Uncomment these to check your work!
 const isOdd = function(num) { return num % 2 === 1; };
 console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
 console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

 /*Fupan:
 counters and return should not be in the forEach loop.  Pay attention to the scope
 */


 /*---------------- Challenge 15: prioritize -------------  */
 // ADD CODE HERE
 function prioritize(arr, callback) {
  /*
  return a boolean
   */

  /*Pesudo
  1. create two arrays, one stores the elements with all true Elements; the other stores the false ones with
  2. use concat() to place the true one before the false one
   */

  let trueArr = []
  let falseArr = []

  arr.forEach(element => {
    if (callback(element) == true){
      trueArr.push(element)
    }else if (callback(element) == false){
      falseArr.push(element)
    }
  })

  return trueArr.concat(falseArr)
  //return [trueArr, falseArr]
 }

// Uncomment these to check your work!
 function startsWithS(str) { return str[0].toLowerCase() === 's'; }
 const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
 console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']



 /* -------------------------- Challenge 16: countBy ----------------------- */
 // ADD CODE HERE

 function countBy(arr, callback){
/*return an object*/

/* Pseudo code 
0. create emptty object
1. create counters for oddNum and evenNum
2. loop through the array and count the numbers of odd and even numbers
3. update counters
4. add to the object
*/

// initiate countOdd and countEven
// create an empty object
let countOdd = 0
let countEven = 0
let objResult = {}

arr.forEach(element => {
  if (callback(element) == 'even'){
    countEven = countEven + 1
  } else if (callback(element) == 'odd'){
    countOdd = countOdd + 1
  }
})

objResult['odd'] = countOdd
objResult['even'] = countEven
//return [countEven, countOdd]

return objResult

}

// Uncomment these to check your work!
function evenOdd(n) {
     if (n % 2 === 0) return 'even';
   else return 'odd';
 }
 const nums_c16 = [1, 2, 3, 4, 5];
 console.log(countBy(nums_c16, evenOdd)); // should log: { odd: 3, even: 2 }



 // ADD CODE HERE 方法2
 // 没有return error, 但是print不对
function countBy_2(array, callback){
  return array.reduce((obj, item) => {
    let result = callback(item);
    obj[result] ? (obj[result] = obj[result] + 1) : (obj[result] = 1)
    return obj
  }, Object.create(null))

}

// Uncomment these to check your work!
function evenOdd_2(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums_c16_2 = [1, 2, 3, 4, 5];
console.log(countBy_2(nums_c16_2, evenOdd_2)); // should log: { odd: 3, even: 2 }

/*------------------Challenge 17 groupBy ----------------  */
// ADD CODE HERE
// Yada! Learn from the other codes!
// Use hasOwnProperty

/*function groupBy(array, callback) {
  return array.reduce((a,c) => {
    let key = callback(c);
    if(a.hasOwnProperty(key)){
      a[key] = [...a[key], c];
  } else { a[key] = [c]}
  return a
  }, {})
}*/
function groupBy(arr, callback){
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    let key = callback(arr[i])
    if(!result.hasOwnProperty(key)){
      result[key] = [arr[i]] 
    } else {
      result[key] = [...result[key],arr[i]] 
      // 这句话的意思是result[key] = [之前所有key value的结果，加上现在这个value]
    }
  }
  return result
}

// Uncomment these to check your work!
 const decimals = [1.3, 2.1, 2.4, 4.3, 4.4, 23.3];
 const floored = function(num) { return Math.floor(num); };
 console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

 /*----------------------- Challenge 18 --------------------- */
 // ADD CODE HERE
 function goodKeys(obj, callback){
  /*the callback will return a boolean*/
  let result = []
  for (let i = 0; i < Object.keys(obj).length; i++){
    if(callback(Object.values(obj)[i]) == true){
      result.push(Object.keys(obj)[i])
    }else{
      // do nothing
    }
  }
  return result
 }

// Uncomment these to check your work!
 const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
 function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
 console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']






 










