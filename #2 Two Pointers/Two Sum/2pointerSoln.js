//should only work if sorted

var twoSum = function (nums, target) {
  let solution = [];
  let left = 0;
  let right = nums.length - 1;
  while (nums[left] + nums[right] != target) {
    //first move the right
    if (left != right) {
      right--;
    }
    //now reset, and move left
    if (left == right) {
      left++;
      right = nums.length - 1;
    }
  }

  solution.push(left);
  solution.push(right);
  return solution;
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
