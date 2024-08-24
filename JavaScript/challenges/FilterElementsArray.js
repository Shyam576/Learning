/* Given an integer array arr and a filtereing function fn, return a filtered array filteredArr.
    The fn function takes on or two arguments:
    - arr[i] - number from the arr
    - i - index of arr[i]

    filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i)
     evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
*/

// My Solution
var filter = function (arr, fn) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

// Expert solution
var filter = function(arr, fn){
    let arr2 = []

    for(i in arr){
        let checkFlag = fn(arr[i], i)
        checkFlag && arr2.push(arr[i]);
    }

    return arr2;
}
