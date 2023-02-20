//should only work if sorted

var twoSum = function (nums, target) {
  let solution = [];
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (nums[leftPointer] + nums[rightPointer] != target) {
    if (leftPointer != rightPointer) {
      rightPointer = rightPointer - 1;
    }
    if (leftPointer == rightPointer) {
      leftPointer = leftPointer + 1;
      rightPointer = nums.length - 1;
    }
  }
  solution.push(leftPointer);
  solution.push(rightPointer);
  return solution;
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
