/**
 [Question Topic] Timeout Cancellation
Given a function *fn*, an array of arguments *args*, and a timeout *t* in milliseconds, return a cancel function *cancelFn*.

After a delay *cancelTimeMs*, the returned cancel function *cancelFn* will be invoked.
***setTimeout(cancelFn, cancelTimeMs)***
Initally, the execution of the function *fn* should be delayed by *t* milliseconds.

If, before the delay of *t* milliseconds, the function *cancelFn* is invoked, it should cancel the delayed execution of *fn*. Otherwise, if *cancelFn* is not invoked within the specified delay *t*, *fn* should be executed with  the provided *args* as arguments.
 */

// Solution

const timeout = function(args,fn,t){
    let timeoutId;

    timeout = setTimeout(()=>{
        fn(...args)
    },t)

    const cancelFn=()=>{
        clearTimeout(timeoutId)
    }

    return cancelFn;
}

//Expert solution
var cancellable = function(fn, args, t) {
    let timer = setTimeout(() => fn(...args), t);
    return function(){
        clearTimeout(timer);
    }
};