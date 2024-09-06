# Join Two Arrays by ID
Given two arrays `arr1` and `arr2`, return a new array `joinedArray`. All the objects in each of the two inputs arrays will contain an `id` field that has an integer value.

`joinedArray` is an array formed by merging `arr1` and `arr2` based on their `id` key. The length of `joinedArray` should be the length of unique values of `id`. The returned array should be sorted in **ascending** order based on the `id` key.

If a given `id` exists in one arrray but not the other, the single object with that `id` shoudl be included in the result array without modification.

If two objects share an `id`, their properties should be merged into a single object:
- If a key only exists in  one object, that single key-value pair should be included in the object
- If a key is included in both objects, the value in the object from `arr2` should overwrite t he value from `arr1`.

## Problem Breakdown
You have two arrays of objects, `arr1` and `arr2`, where each object has an id field. You need to merge these two arrays into a new array, joinedArray, with the following requirements:
1. **Unique IDs**:The result should only contain unique `id` valus.
2. **Sorting** : The result should be sorted in ascending order based  on the `id` values.
3. **Merging Object**: If an `id appears in both arrays, merge the objects:
    - Properties from `arr2` should override properties from `arr1`
4. **Single Objects** : if an `id` appears in only one array, include that object as it is. 

## Example
```javascript
    const arr1 = [
        {id: 1, name: 'Alice', age:25},
        {id: 2, name: 'Bob', age:30},
        {id: 3, name: 'Charlie', age:35}
    ]

    const arr2 = [
        {id: 2, name: 'Robert', country:'USA'},
        {id: 3, country: 'UK'},
        {id: 4, name: 'David', age:40}
    ];
```

## Step to Create `joinedArray`
1. **Merge Objects**:
    - ID 1: Only exits in `arr1`. The object is {id:1, name: 'Alice', age:25}
    - ID 2: Exists in both arrays. Merge objects
        - From `arr1`: {id: 2, name: 'Bob', age:30}
        - From `arr2`: {id: 2, name: 'Robert', country:'USA'}
        - Merged result : {id: 2, name: 'Robert', age:30, country: 'USA'}(properties from `arr2` override those from `arr1`)
    - ID 3: Exists in both arrays. Merge objects:
        - From `arr1`: {id:3, name: 'Charlie', age: 35}
        - From `arr2`: {id:3, country:'UK'}
        - Merged result: {id:3, name: 'Charlie', age: 35, country: 'UK'}
    - ID 4: Only exits in `arr2`. The object is {id: 4, name: 'David', age: 40}

2. **Combine and Sort**:
    - Combined result before sortin: 
    ```javascript
        [
            {id: 1, name: 'Alice', age: 25},
            {id: 2, name: 'Robert', age:30, country: 'USA' },
            {id: 3, name: 'Charlie', age: 35, country: 'UK'},
            {id: 4, name: 'David', age: 40}
        ]
    ``` 
    - Sorted by result by `id` :
    ```javascript
        [
            {id: 1, name: 'Alice', age: 25},
            {id: 2, name: 'Robert', age:30, country: 'USA' },
            {id: 3, name: 'Charlie', age: 35, country: 'UK'},
            {id: 4, name: 'David', age: 40}
        ]
    ``` 