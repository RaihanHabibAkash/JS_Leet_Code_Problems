const twoSum = (nums, target) => {
    let arr = [];
    let ans = [];

    for(let i = 0; i < nums.length; i++) {
        arr.push([i, nums[i]]);
    }
    arr.sort((a, b) => a[1] - b[1]);

    let l = 0; 
    let r = arr.length - 1;

    while(l < r) {
        let sum = arr[l][1] + arr[r][1];

        if(sum === target) {
            ans = [ arr[l][0], arr[r][0] ];
            return ans;

        } else if(sum < target) {
            l++;

        } else {
            r--;
        }
    }

    if(ans.length === 0){
        return [];
    }
}

console.log(twoSum([5,6,8,4], 10));