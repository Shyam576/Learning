/*
    Given an integer array nums, a reducer function fn, and an initial value init, return 
    the final result obtained by executing the fn function on each element of the array, sequentially,
    passing in the return value from the calculation on the preceding element.

    This result is achieved through the following operations: val=fn(init,nums[0]), val=fn(val,nums[1]),
    val=fn(val,nums[2]), val=fn(val,nums[3]) ... until every element in the array has been processed.
    This ultimate value is then returned.
    
    If the length of the array is 0, the function should return init.

*/

// My Solution
var reduce = function(nums, fn, init){
    let vals = init;
    if(nums.length===0){
        return init;
    }
    for(let i=0; i<nums.length; i++){
        vals = fn(vals, nums[i]);
    }

    return vals;
}

// Expert solution
var reduce = function(nums,fn, init){
    let val = init;
    nums.forEach((el, index)=>{
        val=fn(val,el)
    })

    return val;
}