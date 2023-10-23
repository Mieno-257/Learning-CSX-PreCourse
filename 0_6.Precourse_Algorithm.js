/* ##################################################
 ---------------------Day 6 Homework-----------------
 ####################################################*/

/*----------------------
********POD************
----------------------*/

/* ---- Challenge 1 REGULAR ---*/
/* Learning Points:
a. 解题思路，和CSBin的MODE类似，记得归类 */
function singleNumber(arr) {

    //[YZ Comment] same as mode, but in the opposite way
    
    // Step 1: Create an empty object
    let obj6Regular = new Object();
    
    // Step 2: 
    // a. Loop through the array
    // b. Add unique key and its accumulated value
    for (let i = 0 ; i < arr.length ; i++){
        if (!obj6Regular[arr[i]]){
            obj6Regular[arr[i]] = 1
        }
        else {
            obj6Regular[arr[i]] += 1
        }
    }
    
    //test
    //return obj6Regular;
    /* print
    { '1': 1, '2': 2 }  ->  1
    { '1': 1 }  ->  1
    { '1': 2, '2': 2, '4': 1 }  ->  4
    */
    
    // Step 3
    // a. Loop through the object
    // b. Find the one with single value
    for (let key in obj6Regular){
        if (obj6Regular[key] == 1){
            return key
        }
        else {
            // do nothing
        }
     }
    }
    
    function singleNumberTests() {
      console.log(singleNumber([1, 2, 2]), ' -> ', 1);
      console.log(singleNumber([1]), ' -> ', 1);
      console.log(singleNumber([4, 1, 2, 1, 2]), ' -> ', 4);
    }
    
    singleNumberTests() // uncomment to test
    
    
    /* ---- Challenge 2 Advanced ---*/
    /* Learning Points:
    a. merge array  b. sorting */
    function mergeSortedArrays(array1, array2){
    
    // Step 1: merge the arrays
    const mergeResults = [...array1, ...array2];
    // test code
    // return mergeResults
    /* print: [
      1, 2, 5, 7, 9,
      0, 1, 3, 4, 6,
      7, 9
    ] */
    
    // Step 2: sort the arrays in ascending order
    return mergeResults.sort((a,b) => a - b)
    
    }
    
    function mergeSortedArraysTest() {
      let array1 = [1, 2, 5, 7, 9];
      let array2  = [0, 1, 3, 4, 6, 7, 9];
      console.log(mergeSortedArrays(array1, array2), " ->",  [0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9]);
    }
    
     mergeSortedArraysTest() // uncomment to test
    
    
    /*--------------------------------
    *******CSBin Challenges *********
    ---------------------------------*/
    
      // Challenge 1 FIND MODE
    
    // Given an array, return its mode (the number that appears most often)
    // If there is a tie, return the greater number of tied modes.
    // ex. mode([1,1,2,2,3,3,2,4,5]) === 2 // true because 2 appears most often in the array (the number 2 appears 3 times)
    // ex. mode([1,1,1,3,3,3]) === 3 // true, because 3 and 1 are tied as the mode, but 3 > 1 and the mode function will return the greater of the mode values
    function mode(array) {
      
        // Step 1: Create an empty object
        const object = {};
        
        // Step 2: 
        //1. Go through all elements in array 
        //2. Transfer each unique element stored as a key and then accumulate the count of each unique element as an associated value
        for (let i = 0; i < array.length; i++) {
            if(!object[array[i]]) {
                object[array[i]] = 1
            }else{
                object[array[i]] = object[array[i]] + 1
            }
        }
        //return object
        /*
        { '1': 3, '2': 2, '3': 2, '7': 1 }  -> 1
        { '1': 1 } 1
        { '2': 4, '3': 3 }  -> 2
        */
    
        // Step 3: 
        // Find the highest value and return its corresponding key
    
        let biggestValue = 0
        let biggestKey = 0
    
        /*Difficulty: Had a hard time to loop through objects */
       for (const key in object) {
            if(object[key] > biggestValue){
                biggestValue = object[key]
                biggestKey = key
            }
           // console.log(`${object[key]}`)
           //console.log(`${key}: ${object[key]}`);
        }
        return biggestKey
    
        /*
        for (let el in object) {
           // getting the value of each element
           // comparing to the existing value
            const currentValue = el.valueOf()
            if (currentValue > biggestValue){
                biggestValue = currentValue
            }
            return biggestValue
        }
        */
    
    
        /*
        Error object.map is not a function, because it loop through an array
        // using the .map() method to loop the array
        object.map((el) => {
        // change array elements from string to numbers
            // getting the value of each element
            // comparing to the existing value
            const valueFromObject = el.value
            biggestValue = Math.max(biggestValue, valueFromObject)
            }
        )
        return biggestValue
        */
      }
      // Extension: solve this in 0(n) time
      
    function modeTests() {
        console.log(mode([1,2,2,1,1,3, 7, 3]), ' -> 1');
        console.log(mode([1]), '1');
        console.log(mode([2, 2, 2, 2, 3, 3]), ' -> 2');
      }
    
      modeTests() // uncomment to test!
    
    
      // Challenge 2 
      
    
      
     