// CHALLENGE 1 - ADD CODE BELOW

// define a function getStudents
function getStudents(arr, callback){
    // filter the input students array based on the criterion provided by the SearchCriterion callback function
    // return a new array containing only the students' names that

    // create an empty array to hold the students'names
    let studentsNames = [];
    // filter out the el which meets the requirement
    // go through each array element and check if its key meets the callback?
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i]) == true){
            studentsNames.push(arr[i].name);
        }
        else {
            // do nothing
        }
    }
    // return its name
    return studentsNames
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
 const students = [
 	{ name: 'Wyatt', score: 90, instrument: 'violin'},
 	{ name: 'Bella', score: 60, instrument: 'cello'},
 	{ name: 'Patrick', score: 50, instrument: 'tuba'},
 	{ name: 'Briana', score: 85, instrument: 'clarinet'},
 	{ name: 'Jane', score: 40, instrument: 'violin'},
 	{ name: 'Maria', score: 70, instrument: 'cello'},
 	{ name: 'Emilio', score: 75, instrument: 'violin'},
 	{ name: 'Vijeta', score: 45, instrument: 'flute'}
 ];

 const isAbove50 = n => n.score > 50;
 const playsViolin = n => n.instrument === 'violin';

 console.log(getStudents(students, isAbove50)); // should log: [ 'Wyatt', 'Bella', 'Briana', 'Maria', 'Emilio']
 console.log(getStudents(students, playsViolin)); // should log: [ 'Wyatt', 'Jane', 'Emilio' ]



 // CHALLENGE 2 - ADD CODE BELOW
    // returns an object that contains two methods that have access to the play function's lexical scope.
    // one method is called attack
    // the other method is called heal
    // both methods will update the player's health points
    
    // if the points are taken to 0 or below
    // return "Game Over"

 function play(startingHealth){
    const obj = {
        attack: function(num){
             startingHealth -= num 
             return gameStatus(startingHealth)
        },

        heal: function(num){
             startingHealth += num
             return gameStatus(startingHealth)
        }
    }
    return obj
}


function gameStatus(num){
    if (num > 0){
        return "Your health is" + " " + num 
    }else{
        return "Game over"
    }
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
 const character = play(100);
 console.log(character.attack(20)); // should return "Your health is 80"
 console.log(character.attack(30)); // should return  "Your health is 50"
 console.log(character.attack(20)); // should return "Your health is 30"
 console.log(character.heal(10)); // return "Your health is 40"
 console.log(character.attack(45)); //return "Game over"

/*

function play(sartingHealth){
    const obj = {
        attack: function(num){
            startingHealth -= num 
            if (startingHealth <= 0) return "Game Over"
            return "Your health is " + starting Health
        }

        heal: function(num){
            startingHealth += num
            if (startingHealth <= 0) return "Game Over"
            return "Your health is " + starting Health
        }
    }
}

*/



// CHALLENGE 3 - ADD CODE BELOW
//  declare a recursive function repeatString, which takes in a string and a number as arguments.
//  "repeatString" should return a new string, in which the original string is repeated "num" times.
//  If called with a number less than 1, "repeatString" should return "undefined".

function repeatString(str, num){

    // create base case
    if (num == 1) return str;
    if (num == 0) return undefined;

    // create recursive case 
    return str + repeatString(str, num-=1);
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
 console.log(repeatString('hello', 3)) // => should return 'hellohellohello'
 console.log(repeatString('hello', 1)) // => should return 'hello'
 console.log(repeatString('hello', 0)) // => should return undefined





// BONUS CHALLENGE - ADD CODE BELOW


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const newBird = new Bird('canary', 'red', ['newyork', 'spain'])
// console.log(newBird) // => should log { species: 'canary', 'color: 'red', locations: ['newyork', 'spain'] }
// console.log(newBird.getColor()); // => should return 'red'
// newBird.setColor('yellow');
// console.log(newBird.getColor()); // => should return 'yellow'
// newBird.addLocation('france');
// console.log(newBird.getLocations()) // => should return ['newyork', 'spain', 'france'];


/* BEFORE SUBMITTING YOUR ASSESSMENT:
Please leave a comment below to tell us which Immersive Program you are interested in applying to (East Coast Remote, West Coast Remote, Central Remote, Global Part-Time Remote, NYC Onsite). If you are interested in multiple programs, please write only your top choice so we can connect you with the proper Admissions Team. 
*/

/* =============Immersive Program Application: Fast Track Coding Challenge======================== */
const results = [];

const fizzbuzz = (n) => {
  // ADD CODE HERE...
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 == 0 && i % 5 != 0){
        results.push('fizz')
    }else if(i % 5 == 0 && i % 3 != 0){
        results.push('buzz')
    }else if(i % 3 == 0 && i % 5 == 0){
        results.push('fizzbuzz')
    }else{
        results.push(i)
    }
  }
};

fizzbuzz(16);
console.log(results);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]