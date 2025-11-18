/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    let ans = [];
    for(let i = 0; i < nums.length; i++){
        arr.push([i, nums[i]]);
    }
    // Sorting the by the value, but index remain same.
    arr.sort((a,b) => a[1] - b[1]);

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
    
    // If there is no value found.
    if(ans.length === 0){
        return [];
    }
};


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.