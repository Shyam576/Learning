/*
    Given a function fn, return a memoized version of the function.
    A memoized function is a function that will never be called twice with the same inputs. Instead it will
    return a cached value.

    You can assume there are 3 possible input functions: sum, fib, and factorial.
    - sum accepts two integers a and b and returns a+b. Assume that if a value has already been cached for 
    the arguments (b,a) where a!=b, it cannot be used for the arguments (a,b). For example, if the arguments
    are (3,2) and (2,3), two separate calls should be made.
    - fib accepts one integer n and returns 1 if n<=1 and fib(n-1) + fib(n-2) otherwise.
    - factorial accepts one integer n and returns 1 if n<=1 and factorial(n-1) * n otherwise. 
*/

//Solution
function memoize(fn){
    let cached = new Map();
    return function(...args){        
        let paramKey = JSON.stringify(args);
        if(cached.has(paramKey)){
            return cached.get(paramKey);
        }

        let result = fn(...args);
        cached.set(paramKey, result);
        return result;
    }
}

//expert solution
function memoize(fn){
    const m = new Map();
    let k, r
    return fn.args === 1
    ? a => m.get(a) ?? (m.set(a, r=fn(a)),r)
    : (a,b) => (k=(a & 0xffff) <<16 | (b & 0xffff), (m.get(k) ?? (m.set(k, r=fn(a,b),r))))
}