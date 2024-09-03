/*
    Given an array of asynchronous functions `functions`, return a new promise `promise`. Each function 
    in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

    `promise` resolves:
        - When all the promises returned from functions were resolved successfully in parallel. The 
        resolved value of promise should be an array of all the resolved values of promises in the same order
        as they were in the `functions`. The promise should resolve when all the asynchronous functions in the 
        array have completed execution in parralle. 
    
    `promise` rejects:
        - When any of the promises returned from the functions were rejected. `promise` should also reject with 
        the reason of the first rejection. 
    
    Please solve it without using the built-in Promise.all functions
*/

// Solution
var promiseAll = function(functions){
    
    return new Promise((resolve, reject)=>{
        const results= [];
        let completedPromise = 0;

        functions.forEach((func, index)=>{
            Promise.resolve(func())
                .then((result)=>{
                    results[index] = result;
                    completedPromise += 1;

                    if(completedPromise === functions.length){
                        resolve(result);
                    }
                })
                .catch((err)=>{
                    reject(err);
                })
        })
        if (functions.length === 0){
            resolve([])
        }
    })
}

// Expert Solution
var promiseAll = function(functions){
    var resolved = new Array(functions.length)
    var waitingFor = functions.length 

    return new Promise((resolve, reject)=>{
        for(let i = 0; i < functions.length; i++){
            functions[i]()
                .then((value)=>{
                    resolved[i] = value;
                    waitingFor--;
                    if(waitingFor === 0) resolve(resolved)
                })
                .catch((err)=>{
                    reject(err);
                })
        }
    })
}