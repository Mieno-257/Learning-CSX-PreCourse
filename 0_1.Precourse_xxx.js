
/* ----------- Day 1: Challenge 1  ---------------- */

/*  Regular */
/*Create a function reverseString that accepts a string as a parameter and returns the reverse of that string.
For example: 
> reverseString("I love testing") // should return "gnitset evol I"*/

/* my method 
function reverseString(string) {
    return string.split("").reverse().join("");
} */

function reverseString(str){
    let newStr = "";
    for(let i = str.length - 1; i  >= 0; i--){
        newStr += str[i];
    }
    return newStr
}

//const reverseString = str => str.split(" ").reverse().join("");
// if there is a single paramters, you don't need to put a parameters around it.


// Uncomment the line below and click "run" to test your code
console.log('Challenge 1:', reverseString("codesmith prep") === "perp htimsedoc" ? "Correct!" : "Try again!");


/* Advanced - Draw Starts */
/* Write a function that console logs a staircase of any given height where 1 <= N <= 100. 
The staircase must climb up from left to right. 
The last line should only consist of asterisks, without any leading/trailing spaces.  
For example:   

```
drawStairs(5) ->
    *
   **
  ***
 ****
*****
```
 */

function drawStairs(n) {
    //console.log('*****')
      // here we use just one for loop where i tracks the number of rows
  // the number of rows (i) should be less than or equal to n
  for (let i = 1; i <= n; i++) {
    // print out a " " n-i times and append a # i times
    // console log adds a new line by default
      console.log(" ".repeat(n-i) + "#".repeat(i))
  }   
  }
  
  drawStairs(5)