/*
    Given a function fn, return a new function that is identifcal to the original function except that it ensures fn is called at most once.
    - The first time the returned function is called, it should return the same result as fn.
    - Every subsequent time it is called it should return undefined
*/

/*
 NOTE: The ...args syntax in JS is known as the 'rest paramter' when used in function definitions, and the "spread syntax" when used in other context.

 1. Rest Parameters
 The rest paramter syntax allows a function to accept an indefinite number of arguments as an array.
 Example:
 function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0)
 }
console.log(sum(1,2,3));//6

2. Spread Syntax
The spread syntax is used to expand an iterable(like an array) into individual elements.
Example:
const number = [1,2,3,4]
console.log(Math.max(...numbers)); // 4
 */


// Solution
var once = function(fn){
    let called = false;
    let result;
    return function(...args){
        if(!called){
            result = fn(...args);
            called= true;
            return result
        }
        return undefined;
    }
}

//expert solution

var once = function(fn){
    let called =false;
    return function(...args){
        if(!called){
            called=true;
            return(fn(...args))
        }
        return undefined;
    }
}