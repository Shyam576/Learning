/*
    Given an array arr and a chunk size size, return a chunked array.

    A chunked array contains the original elements in arr, but consists of subarrays each of length size. The
    lenght of the last subarray may be less than size if arr.length is not evenly divisible by size.

    You may assume that array is the output of JSON.parse. In other words, it is a valid JSON.

    Please solve it without using loadash's _.chunk function.
*/

// Solution
var chunk = function(arr, chunk){
    if(arr.length === 0) return arr;

    let chunkedArr = []
    if(size >= arr.length){
         chunkedArr.push(arr);

    }else{
        let i =0;
        while( i < arr.length){
            chunkedArr.push(arr.slice(i, i+size))
            i+=size;
        }
    }

    return chunkedArr;
}

// Expert solution
var chunks = function(arr, size){
    let result = [];
    for( let i=0; i<arr.length; i+=size ){
        result.push(arr.slice(i, i+size));
    }
    return result; 
}