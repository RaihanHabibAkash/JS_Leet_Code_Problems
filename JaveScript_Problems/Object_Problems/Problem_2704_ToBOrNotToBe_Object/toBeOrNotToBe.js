const expect = (val) => {
    return {
        toBe: (otherVal) => {
            if(val === otherVal) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (otherValue) => {
            if(val !== otherValue) {
                return true;
            } else {
                throw new Error("Equal");
            }
        },
    }
} 

console.log(expect("Hello").notToBe(5));