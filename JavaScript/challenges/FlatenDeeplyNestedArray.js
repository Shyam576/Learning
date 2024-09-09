/*
 Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
This flattening operation should only be done if the current depth of nesting is less than n. 
The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
 */

//Solution
var flat = function (arr, n) {
    const result = [];

    function flattenHelper(subArray, currentDepth) {
        for (let element of subArray) {
            if (Array.isArray(element) && currentDepth < n) {
                flattenHelper(element, currentDepth + 1);
            } else {
                result.push(element);
            }
        }
    }

    flattenHelper(arr, 0);
    return result;
};

// Expert Solution
var flat = function (arr, n) {
    if(n === 0) {
        return arr;
    }
    const result = [];
    const iter = (item, deep = 0) => {
        if (deep <= n) {
            item.forEach((item) => Array.isArray(item) ? iter(item, deep + 1) : result.push(item));
        } else {
            result.push(item);
        }
    };
    iter(arr);
    return result;
};