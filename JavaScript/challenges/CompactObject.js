/*
    Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/

//Solution
var compactObject = function(obj){
    if(Array.isArray){
        return obj.map(compactObject).filter(Boolean)
    }else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).reduce((acc, key) => {
            const value = compactObject(obj[key]);  
            if (Boolean(value)) {
                acc[key] = value; 
            }
            return acc;  
        }, {});
    }
    return obj;
        
}