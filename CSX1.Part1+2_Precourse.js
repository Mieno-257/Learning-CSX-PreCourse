console.log(3%25)
console.log(7%28)
console.log(!(true && false))
console.log(!true || !false)

let bootcamp;
bootcamp= "App Academy";
console.log(bootcamp);

let birthyear = 2012;
console.log(birthyear);

console.log("academy".indexOf("r"));

/*String Methods*/
const myString = "Howdy";
console.log(myString.length);
console.log("I love Javascript".length);

const favArtist = "Davie Bowie";
console.log(favArtist.toUpperCase());
console.log(favArtist.toLowerCase());

const eightyThreeModeSix = 83 % 6;
const sixtyModeNine = 60 % 9;
console.log(eightyThreeModeSix);
console.log(sixtyModeNine);



/* Challenge Phone Book */
// If you're having trouble, use lines 12-14 for expected inputs and outputs
const phoneBook = {};
const names = ['Mira', 'Royce', 'Kathie'];
const numbers = ['3234958675', '9164059384', '4154958675']

// Write your code below this line
for (let j = 0; j < names.length; j++){
    phoneBook[names[j]] = numbers[j]
}

//Uncomment the lines below to test your code

console.log(phoneBook["Mira"]); //=> 3234958675
console.log(phoneBook["Royce"]); //=> 9164059384
console.log(phoneBook["Kathie"]); //=> 4154958675
console.log(phoneBook);


/*------For Loop Challenge-------*/
// Loop
let countDown = 10;
// ADD CODE HERE
for(let i = 10; i>0 ; i--){
  countDown--;
}

// challenge

const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i = 0; i < 3; i++){
    greetings.push("Have a " + synonyms[i] + " " + "day!");
  }
  console.log(greetings)

  // 2. 
// Loop through the greetings array, logging each greeting to the console:
// 'Have a fantastic day!'
// 'Have a wonderful day!'
// 'Have a great day!'
// ADD CODE HERE
  for (let i = 0; i < 3; i++){
    console.log(greetings[i]);
  }


  /*------Control Flow Challenge: Fizzbuzz-------*/
  const fb = [];
// ADD CODE HERE

for(let i = 1; i<17; i++){
    let countPresentation = 1
    if(i%3 == 0 && i%5 != 0){
        countPresentation = "fizz";
    }else if (i%5 == 0 && i%3 !=0){
        countPresentation = "buzz";
    }else if(i%5== 0 && i%3 ==0){
        countPresentation = "fizzbuzz";
    }else{
        countPresentation = i;
    }
    fb.push(countPresentation);
}
console.log(fb);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// Official solution
const fb_solution = [];
for(let i = 1; i<17; i++){
    if (i % 3 === 0 && i % 5 !== 0) {
        fb_solution.push("fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        fb_solution.push("buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
        fb_solution.push("fizzbuzz");
    } else {
        fb_solution.push(i);
    }
}
console.log(fb_solution);

  /*------Objects-------*/
  /*Challenge 1: Study Object.keys(obj)*/ 
  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  //console.log(checkObj) => { oddNum: 1, evenNum: 2, foundNum: 5, randomNum: 18 }
  //console.log(Object.keys(checkObj)) => [ 'oddNum', 'evenNum', 'foundNum', 'randomNum' ]
  //console.log(Object.keys(checkObj)[0]) 
  //console.log(checkObj.length) ==> undefined
  let found = 0;
  for (let i = 0; i < Object.keys(checkObj).length; i++){
    if(Object.keys(checkObj)[i] === 'foundNum'){
        found = 1;
    }
    else{
        // do nothing
    }
  }
  console.log(found)

  /*Challenge 2: Study Getting values from Object */
  const checkObj_2 = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
 // console.log(checkObj_2.oddNum)

  for (let i = 0; i < Object.keys(checkObj_2).length; i++){
    if(checkObj_2[Object.keys(checkObj_2)[i]] >= 2 ){
        objToArray.push(checkObj_2[Object.keys(checkObj_2)[i]])
    }
    else{
        // do nothing
    }
  }
  console.log(objToArray)

  /* -----Challenge 3: Objects.values ------ */
  const checkObj_3 = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE

  //use the Object.values() to return an array of checkObj_3's value
  // assign this array to a constant called ObjToArray_3
  const objectToArray_3 = Object.values(checkObj_3)
  //console.log(objectToArray_3)
  // Use a for loop to iterate through the array and determine if any of the numbers are divisible by 6.
  // if so, reassign the value of divBy6 = true
  for (let i = 0; i < objectToArray_3.length; i++){
    if(objectToArray_3[i] % 6 == 0){
        divBy6 = true;
    } else {
        // do nothing
    }
  }
  console.log(divBy6)
  
/*-------Challenge 4 Nested Array ------- */
const nestedArr = [];
// ADD CODE HERE
for(let i = 0; i < 5; i++){
  nestedArr.push([`loop${i}`,i]);
}
console.log(nestedArr);

/* -------- Challenge 5: Objects - Adding Properties------- */
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};
// ADD CODE HERE
// 1. Using a for loop to build the object "divByThree"
// 2. Key: an element of possibleIterable that is divisible by three
// 3. Value: the array index at which they can be could be found in possibleIterable
// => divByThree = [
  //   '3': 1,
  //   '9': 3]
for (let i = 0; i < possibleIterable.length; i++){
  if(possibleIterable[i] % 3 === 0){
    divByThree[(possibleIterable[i])] = i
  }
  else{
    // do nothing
  }
}
console.log(divByThree)

/* -------- Challenge 6:Objects - Evaluating Keys -------*/
const sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};
let total = 0;
// ADD CODE HERE
// 1. Iterate key 
// 2. Judge if the value corresponding to a key is a number
// 3. If yes, add it to the total
// output shall be 15

for (let i = 0; i < Object.keys(sumMe).length; i++){
  if(typeof sumMe[Object.keys(sumMe)[i]] === 'number'){
    total = total + sumMe[Object.keys(sumMe)[i]]
  }
  else{
    // do nothing
  }
}
console.log(total)
console.log(sumMe.hello)
console.log(sumMe[Object.keys(sumMe)[0]])