/* 
Given an integer array nums, find the subarray with the largest sum, and return its sum.

 
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

var maxSubArray = function (nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = 0; j < nums.length; j++) {
      currentSum = Math.max(nums[j], currentSum + nums[j]);
      maxSum = Math.max(currentSum, maxSum);
    }
    currentSum = 0;
  }

  return maxSum;
};

let numArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(numArray));
