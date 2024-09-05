/*
    Write a code that enchances all arrays such that you can call the array.groupBy(fn) method on any array
    and it will return a grouped version of the array.

    A grouped array is an object where each key is the output of of fn(arr[i]) and each value is an array
    containing all items in the original array with that key.

    The provided callback fn will accept and item in the array and retun a string key.

    The order of each value list should be the orderthe items appear in the array. Any order of keys is
    acceptable.

    Please solve it without lodash's _.groupBy function.
*/
// Solution
Array.prototype.groupBy = function(fn){
    return this.reduce((grouped, item)=>{
        let key =fn(item)
        if(!grouped[key]){
            grouped[key] = []
        }
        grouped[key].push(item)
        return grouped;
    },{})
}

//Expert solution
Array.prototype.groupBy = function(fn){
    let ans = {}
    this.forEach(val=>{
        let v= fn(val)
        if(ans.hasOwnProperty(val)){
            ans[v].push(val)
        }else{
            ans[v] = [val];
        }
    })
    return ans;
}