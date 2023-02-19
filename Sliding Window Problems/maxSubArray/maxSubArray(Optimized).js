function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
// In this solution, we initialize two variables maxSum and currentSum to the first element in the nums array. We then iterate through the array starting from the second element, and for each element, we update the currentSum to be the maximum of the current element and the sum of the current element and the previous currentSum. We also update maxSum to be the maximum of the current maxSum and currentSum at each iteration. Finally, we return maxSum as the result. This algorithm has a time complexity of O(n) and a space complexity of O(1).

// The above solution follows the Sliding Window technique as it maintains a "window" of contiguous subarray elements and slides the window along the input array to find the maximum sum subarray.

// In particular, the algorithm keeps track of two variables: maxSum and currentSum. The currentSum variable represents the sum of the current window, which starts at the current element and ends at the previous element with the highest sum. The maxSum variable represents the maximum sum found so far and is updated whenever a new maximum sum is found.

// The algorithm then iterates through the input array, starting from the second element. At each iteration, it updates the currentSum variable by taking the maximum value between the current element and the sum of the current element and the previous currentSum. If the updated currentSum is greater than the current maxSum, then maxSum is updated to the new currentSum.

// As the algorithm continues to iterate through the input array, the window of contiguous subarray elements slides along the array until the entire array has been processed. The final maxSum value represents the maximum sum subarray of the input array.

//Example:
let nums = [-2, 1, -3, 4];

/*
Here's how the sliding window moves to find the maximum sum subarray:

Window at index 0: [-2], currentSum = -2, maxSum = -2
Window at index 1: [-2, 1], currentSum = 1, maxSum = 1
Window at index 2: [1, -3], currentSum = 1 + (-3) = -2, maxSum = 1
Window at index 3: [1, -3, 4], currentSum = -2 + 4 = 2, maxSum = 2
Done processing the array, the maximum sum subarray is [4] with a sum of 4, which is the final value of maxSum.
*/

console.log(maxSubArray(nums));

//OPTION 2:
// var maxSubArray = function(nums) {
//     let [max,  currentSum] = [nums[0],0]
//     for (let i in nums) {
//         if (currentSum < 0 ) currentSum = 0
//         currentSum += nums[i]
//         max = Math.max(max, currentSum)
//     }
//     return max
// };
