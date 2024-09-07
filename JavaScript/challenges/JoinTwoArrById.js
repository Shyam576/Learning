/*
   Given two arrays `arr1` and `arr2`, return a new array `joinedArray`. All the objects in each of the two inputs arrays will contain an `id` field that has an integer value.

`joinedArray` is an array formed by merging `arr1` and `arr2` based on their `id` key. The length of `joinedArray` should be the length of unique values of `id`. The returned array should be sorted in **ascending** order based on the `id` key.

If a given `id` exists in one arrray but not the other, the single object with that `id` shoudl be included in the result array without modification.

If two objects share an `id`, their properties should be merged into a single object:
- If a key only exists in  one object, that single key-value pair should be included in the object
- If a key is included in both objects, the value in the object from `arr2` should overwrite t he value from `arr1`. 
*/

// Solution

var join = function(arr1, arr2) {
    const map = new Map();
   for (const obj of arr1) {
       map.set(obj.id, obj);
   }


   for (const obj of arr2) {
       if (map.has(obj.id)) {
           const existingObj = map.get(obj.id);
           map.set(obj.id, { ...existingObj, ...obj }); 
       } else {
           map.set(obj.id, obj);
       }
   }


   const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);
   
   return joinedArray;
};

// Expert solution
var join = function(arr1, arr2) {
    const memo = {};
    
    for(const item of arr1) {
        memo[item.id] = item;
    }

    // We can deallocate first array to save memory
    arr1.length = 0;
    arr1 = null;

    for(const item of arr2) {
        const obj = memo[item.id];

        if(obj !== undefined) {
            for(const key in item) {
                obj[key] = item[key];
            }
        } else {
            memo[item.id] = item;
        }
    }

    // We can deallocate second array to save memory
    arr2.length = 0;
    arr2 = null;

    return Object.values(memo);
};