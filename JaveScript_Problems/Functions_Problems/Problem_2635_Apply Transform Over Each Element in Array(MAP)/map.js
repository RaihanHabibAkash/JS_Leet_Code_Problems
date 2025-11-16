const map = (arr, fn) => {
    let newArray = [];

    for(let i = 0; i < arr.length; i++){
        newArray[i] = fn(arr[i], i)
    }
    return newArray;
}

const result = map([1,2,3], (n, x) => n + x);
console.log(result);
