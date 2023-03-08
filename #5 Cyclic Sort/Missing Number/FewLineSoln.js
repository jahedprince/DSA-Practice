var missingNumber = function (nums) {
  const result = new Array(nums.length + 1).fill(-1);
  for (let num of nums) {
    result[num] = num;
  }

  return result.indexOf(-1);
};

console.log(missingNumber([3, 0, 1]));
