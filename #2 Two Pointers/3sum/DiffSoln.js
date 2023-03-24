var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const soln = [];

  //i is starting and moves only after checking the inner two pointers
  for (let i = 0; i < nums.length - 2; i++) {
    //checks outer loop dupilcate before comparing left and right
    if (nums[i] != nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === 0) {
          soln.push([nums[i], nums[left], nums[right]]);
          //to avoid duplicate solution sets and only moves the pointer until the next isn't the same, so that's the next two statemnts take care of having diff values
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return soln;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
