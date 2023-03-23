/**
 * @param {number[]} nums
 * @return {number}
 */

/*
The sliding window technique works by moving the window everytime the window is 0 or negative. Moving our window when we find a negative number increases our chances of finding a positive number, which would increase our sum.

The time complexity of this solution is O(N) since we are itearting through the numbers array once.
 */
function maxSubArray(nums) {
  let maxSum = -Infinity;
  let currentSum = 0;

  let i = 0;
  let j = 0;

  while (j < nums.length) {
    currentSum = currentSum + nums[j];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum <= 0) {
      i = j;
      currentSum = 0;
    }
    j++;
  }
  return maxSum;
}

let nums = [-2, 1, -3, 4];
console.log(maxSubArray(nums));
