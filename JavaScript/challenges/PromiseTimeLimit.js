/*
    Given an asychronous function fn and a time t in milliseconds return a new time limited version of the 
    input function. fn takes arguments provided to the time limited function.
    The time limited function should follow these rules:
    - IF the fn  completes within the time limit of t milliseconds, the time limited function should resolve with
    the result.
    - If the execution of the fn exceeds the time limit, the time limited function should reject with the string
    "Time Limit Exceeded"
*/

// My Solution
function timeLimit(fn, t){
    return async function(...args){
        return new Promise((resolve, reject)=>{
            const timeout = setTimeout(()=>{
                reject("Time Limit Exceeded");
                
            }, t)
            fn(...args)
                .then(result=>{
                    clearTimeout(timeout)
                    resolve(result)
                })
                .catch(err=>{
                    clearTimeout(timeout)
                    reject(err)
                })
        })

    }
}

//Expert solutin
var timeLimit = function(fn, t){
    return function(...args){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                rej('Time Limit Limited')
        },t)
        fn(...args)
            .then(res)
            .catch(rej)
        });
    }
}