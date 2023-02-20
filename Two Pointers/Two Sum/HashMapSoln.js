//Main: a way to store the index
//we make the complement of the element as the key of map to check in future iterations if there is an index for that comp.
//if there is comp, you return that index, as well the index (value) of that current element (key)
var twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
