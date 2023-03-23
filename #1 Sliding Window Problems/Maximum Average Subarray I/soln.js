/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//https://leetcode.com/problems/maximum-average-subarray-i/description/

var findMaxAverage = function (nums, k) {
  let maxAvg = -Infinity;
  let startIdx = 0;
  let sum = 0;

  for (let endIdx = 0; endIdx < nums.length; endIdx++) {
    sum += nums[endIdx];
    if (endIdx - startIdx + 1 === k) {
      maxAvg = Math.max(maxAvg, sum / k);
      sum -= nums[startIdx];
      startIdx++;
    }
  }
  return maxAvg;
};

let nums = [1, 12, -5, -6, 50, 3],
  k = 4;

console.log(findMaxAverage(nums, k));

/*
T.C.: O(n) 
S.C.: O(1)

*/
