const createCounter = (val) => {
    let i = val;

    return {
        increment: () => {
            return ++i;
        },
        decrement: () => {
            return --i;
        },
        reset: () => {
            i = val;
            return i;
        }
    }
}

console.log(createCounter(1).reset());