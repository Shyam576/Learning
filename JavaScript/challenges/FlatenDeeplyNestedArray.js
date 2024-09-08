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
                // Recursively flatten the element if it's an array and depth is less than n
                flattenHelper(element, currentDepth + 1);
            } else {
                // Otherwise, push the element into the result
                result.push(element);
            }
        }
    }

    flattenHelper(arr, 0); // Start flattening with depth 0
    return result;
};
