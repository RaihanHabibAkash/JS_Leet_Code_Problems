const createCounter = (n) => {
    
    return function() {
        return n++;
    };
};
const number = createCounter(10);
console.log(number());
console.log(number());
console.log(number());
// Output be like 10,11,12. Will Increment every time when the function is called.