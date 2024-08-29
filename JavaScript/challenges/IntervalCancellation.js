/*
    Given a function fn, an array of arguments args, and ainterval time t, return a cancel function cancelFn.
    After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
    setTimeout(cancelFn, cancelTimeMs);

    The function fn should be called with args immediately nad the called again every t milisceonds until cancelFn
    is called at cancelTimeMs ms.
*/

// My Solution
var cancellable = function (fn, args, t){
    fn(...args)

    let timeoutId = setInterval(()=>{
        fn(...args)
    }, t)

    return function () {
        cancelTimeout(timeoutId)
    }
}

var cancellable = function (fn,args,t){
    fn(...args)
    let timer = setInterval(()=>fn(...args), t)

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
}