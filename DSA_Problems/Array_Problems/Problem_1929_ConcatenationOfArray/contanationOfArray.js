const getConcatenation = (nums) =>  {
    let ans = [];
    let first = [];
    for(let i = 0; i < nums.length; i++) {
        first[i] = nums[i];
    } 
    ans = [...first, ...first];
    return ans;
};

console.log(getConcatenation([1,2,4,1]));