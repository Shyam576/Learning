const quickSort = function(arr, compareFn) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < arr.length; i++) {
        if (compareFn(arr[i], pivot) < 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left, compareFn), pivot,...quickSort(right, compareFn)]
}

const numbers = [34,56,2,3,45,32]
const sortedNumber = quickSort(numbers,(a,b)=>a-b)
console.log(sortedNumber)