//check all sub arrays

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      //can't be same index
      if (i != j && nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
