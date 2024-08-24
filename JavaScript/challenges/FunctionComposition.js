/*
    Given an array of functions [f1,f2,...fn] return a new function fn that is the 
    function composition of the array of functions.
    The function conmposition of [f(x),h(x),g(x)] if fn(x) = f(h(g(x)))

    The function composition of an empty list of functions is the identity function f(x)=x.

*/

//my solution
var compose = function(functions){
    return function(x){
        let val = x;
        for(let i= functions.length-1; i>-1; i--){
            val = functions[i](val);
        }
        return val;
    }
}

//expert solution

var compose = function(functions){
    if(functions.length===0){
        return function(x){return x;}
    }
    return function(x){
        let res=x;
        for(let i=functions.length-1; i>=0;i--){
            res = functions[i](res);
        }
        return res;
    }
}