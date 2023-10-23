
/*---------------Scope, Closure and Context Execution -------------------- */

// ######### Class Example ########
function once(callback){
	let hasBeenRun = false;
  let firstReturnedValue;
  return (...callbackArgs) => {
    if (!hasBeenRun){
      firstReturnedValue = callback(...callbackArgs);
      hasBeenRun = true;
    }
    return firstReturnedValue;
  }
}

const multipleBy3 = num => {
  return num * 3;
}

const multiplyByThreeOnce = once(multipleBy3);
const firstRun = multiplyByThreeOnce(10);
const secondRun = multiplyByThreeOnce(8);
const thirdRun = multiplyByThreeOnce(150);

console.log(firstRun, secondRun, thirdRun)




// ######### Challenge 1 CreateFunction ################
// ADD CODE HERE
function createFunction(){
  function printHelloWorld(){
    return 'hello world'
  }
  return printHelloWorld
}

// Uncomment these to check your work!
 const myFunction = createFunction();
 console.log(myFunction()); //should log: 'hello world'

 // method 2
 function createFunction2(){
  return () => "hello world"
 }

 const myFunction2 = createFunction2();
 console.log(myFunction2()); //should log: 'hello world'

 /*<!---- IMPORTANT ---> 
 再复习closure的diagram逻辑
 */

 //####### Challenge 2 createFunction with Input #################
 // ADD CODE HERE
 function createFunctionWithInput(str){
  return () => str 
 }

// UNCOMMENT THESE TO TEST YOUR WORK!
 const sampleFunc = createFunctionWithInput('sample');
 console.log(sampleFunc()); // should log: 'sample'
 const helloFunc = createFunctionWithInput('hello');
 console.log(helloFunc()); // should log: 'hello'

//####### Challenge 3 Scoping #################
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();
  

//####### Challenge 4 addByX #################
// ADD CODE HERE
function addByX(num) {
  return (base) => base + num;
}

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1))

// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2))

const addByThree = addByX(3)
console.log(addByThree(1))


//####### Challenge 5 once #################
// ADD CODE HERE
function once(callback){
  let firstTime = true;
  let firstTimeNumber;
  return (callbackArg) => {
    if (firstTime) {
      firstTimeNumber = callback(callbackArg);
      firstTime = false;
    }
    return firstTimeNumber
  }
  /*错误示范：if (firstTime){
    firstTimeNumber = callback
    firstTime = false
  }
  return firstTimeNumber*/
}


const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7


//####### Challenge 6 after #################
// ADD CODE HERE
function after(num, callback){
  let i = 0;
  let printValue;
  return (...callbackArg) => {
    i++
    if (i >= num) {
      printValue  = callback(...callbackArg);
    }/*else{
      printValue = undefined;
    }*/
    return printValue
  }
  
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed


//####### Challenge 7 delay #################
// ADD CODE HERE
function delay(callback, waitTime){
  return () => setTimeout(callback, waitTime)
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
 let count = 0;
 const delayedFunc = delay(() => count++, 1000);
 delayedFunc();
 console.log(count); 												 // should print '0'
 setTimeout(() => console.log(count), 1000); // should print '1' after 1 second


//####### Challenge 8 saveOutput #################
// ADD CODE HERE
/*
let key = []
let value = []
let obj = {}

function saveOutput(callback, str){
  // pseudo code
  //• create storage for the key and values
  //• Make a judgement 
   // - Check the argument passing to callback is the same as saveOutput str
    //- If yes, return an object
    //- If no, return the result of multiplyBy2

return (...callbackArg) => {
  if (isNaN(callbackArg) ){
    key.push(callbackArg)
    value.push(callback(...callbackArg))
    return callback(callbackArg)
  } else if (callbackArg == str){
    for (let i = 0; i < key.length; i++){
      obj[key[i]] = value[i]
    };
    return obj
  }
}
} */

function saveOutput(callback, str){

  let obj = {}
  return (callbackArg) => {
    if (callbackArg == str){
      return obj
    }else if (typeof callbackArg == 'number'){
      return obj[callbackArg] = callback(callbackArg)
    }
  }
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }



//####### Challenge 9 cycleIterator #################

// ADD CODE HERE
function cycleIterator(arr){
  let count = 1
  let print
  return () => {
    if (count % arr.length != 0){
         print = arr[count-1]
         count ++
         return print
        
    }else{
      print = arr[arr.length - 1]
      count = 1
      return print
    }
  }
}

// Uncomment these to check your work!
 const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
 const getDay = cycleIterator(threeDayWeekend);
 console.log(getDay()); // should log: 'Fri'
 console.log(getDay()); // should log: 'Sat'
 console.log(getDay()); // should log: 'Sun'
 console.log(getDay()); // should log: 'Fri'
 console.log(getDay()); // should log: 'Sat'
 console.log(getDay()); // should log: 'Sun'

 
//####### Challenge 10 defineFirstArg #################
// ADD CODE HERE
function defineFirstArg(callback, arg){
  return (...callbackArg) => callback(arg, ...callbackArg)
}

// Uncomment these to check your work!
 const subtract = function(big, small) { return big - small; };
 const subFrom20 = defineFirstArg(subtract, 20);
 console.log(subFrom20(5)); // should log: 15



//####### Challenge 11 hobbyTracker #################

/*
 // create an empty object
let hobbies = ['yoga', 'baking', 'piano'] 
const obj = {}
for (let i = 0 ; i < hobbies.length; i++){
  obj[hobbies[i]] = 0
}*/

function hobbyTracker(hobbies) {
  // create an empty object
  const obj = {}
  for (let i = 0 ; i < hobbies.length; i++){
    obj[hobbies[i]] = 0
  }
  return (hobby, hours) => {
    if (hobby === undefined && hours === undefined){
      for (let i = 0 ; i < Object.keys(obj).length; i++){
        obj[(Object.keys(obj))[i]] = 0
      }
      return "tracker has been reset!"
    }else{
      for (let i = 0; i < Object.keys(obj).length; i++){
        if (hobby == (Object.keys(obj))[i]){
          obj[(Object.keys(obj))[i]] = Object.values(obj)[i] +hours
        }
      }
      return obj
  }
 }
}
  // return an object that include the hobby and the practice hours

// 几点思考
/* 1.找更方便的方法
  2. Object写for loop的时候被绕进去了。再检查一下有没有更简单的方法 
  3. 总结如何assign object key = value*/
  

//console.log (obj)

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
 updateHobbies('yoga', 2);
 updateHobbies('baking', 4);
 updateHobbies('yoga', 1);
 console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
 console.log(updateHobbies()); // --> 'tracker has been reset!'
 console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}




//####### Challenge 12 dataStamp #################
// ADD CODE HERE
function dateStamp(callback){
  const obj = {}
  const date = new Date();
  /*let currentDay= String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;*/
  return (...callbackArg) => { 
    obj.date = date.toDateString();
    obj.output = callback(...callbackArg)
    return obj
  }
}
// Uncomment these to check your work!
 const stampedMultBy2 = dateStamp(n => n * 2);
 console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
 console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

 // 要加...，因为题目有“the returned function will accept whatever arguments the passed-in function accepts and return an object”


 //####### Challenge 13 censor #################
// ADD CODE HERE
function censor(){
  const objCache = {}
  return (...strArg) => {
    if(strArg.length == 2){
      objCache[strArg[0]] = strArg[1]
      // Test if the cache is stored
      //return objCache;
    }else if(strArg.length == 1){
      /* pseudo code
       // find the duplicates between two array
      // if the match is found, replace it with the new value
      // sentence = ["The", "quick", "brown", "fox"....]
      // value = ["dogs", "quick"]
      */
      const keyArr = Object.keys(objCache);
      const valueArr = Object.values(objCache);
      /*
      Error Case: When some browsers don't support the function of Object.values, you can use the following function
      const valueArr = Object.keys(objCache).map(function(key){
      return objCache[key]
      */

      const splitStr = strArg[0].replace(/[^\w\s]|_/g, function ($1) { return ' ' + $1 + ' ';}).replace(/[ ]+/g, ' ').split(' ');
      for (let i = 0; i < splitStr.length; i++) {
        for (let j = 0; j < keyArr.length; j++) {
          if (splitStr[i] == keyArr[j] ) {
            splitStr[i] = valueArr[j]
          }
        }
      }

      const backToString = splitStr.join(" ").replaceAll(" ,", ",").replaceAll(" .", ".");
      return backToString
      }
    }
  }


// Uncomment these to check your work!
 const changeScene = censor();
 changeScene('dogs', 'cats');
 changeScene('quick', 'slow');
 console.log(changeScene('The quick, brown fox jumps over the lazy dogs.'));
 // should log: 'The slow, brown fox jumps over the lazy cats.'

 /*
 这道题目的难点。
 1. 在split string to array的时候，我没有发现在element中["quick,", "dogs."]，这两个element中是带标点符号的！
 所以在做if判断的时候，怎么都不会是对的。Debug了很久。
 2. 第一步是要把标点符号摘出来
 3. 第二步是要把标点符号处的space去除。
 4. 在使用不确定argument的时候，可以用[...arg]。
    a. 第一个arg就是arg[0]，第二个arg即为arg[1]

 学到的点
 1. 为了让代码不复杂，可以先把Object.keys(obj)和Object.values(obj)放在一个array里
 2. 对double loop理解更深入
 3. 会用CSBin测试
 
 */
 

