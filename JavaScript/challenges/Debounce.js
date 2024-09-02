/*
    Given a functin fn and a time in milliseconds t, return a debounced version of that function.
    A debounced function is a function whose execution is delayed by t milliseconds and whose execution
    is cancelled if it is called again within that window of time. The debounced function shoiiuld also 
    receive that passed parameters.
    For example, let's say t = 50ms and the function was called at 30ms,60ms, and 100ms

    The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms.
    
    If instead t=35ms, The 1st call would be cancelled, and the 3rd call would be executed at 135 ms. 

*/

//Solution 
var debounce = function(fn, t){
    let timeoutId;

    return function(...args){
        if(timeoutId){
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(()=>{
            fn.apply(this,args)
        },t)
    }
}

// Expert Solution
var debounce = function(fn, t){
    let id 
    return function(...args){
        clearTimeout(id)
        id = setTimeout(()=>fn(...args),t)
    }
}