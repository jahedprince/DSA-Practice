var firstMissingPositive = function (nums) {
  //sort the elements first using cyclic sort
  let i = 0;
  while (i < nums.length) {
    const toSwap = nums[i];
    //it would be 0-based but we are ignoring 0 since we are only focusing on positive numbers & some inputs might not have 0
    const swapWithIdx = toSwap - 1;

    // swap the elements
    // first comdition checks if it's already right
    // second condition is placed so that the element needed to be swapped remains in its place in case the right place is out of bounds
    if (toSwap !== nums[swapWithIdx] && toSwap <= nums.length && toSwap > 0) {
      //temp vairable to hold the element
      const swapWith = nums[swapWithIdx];
      nums[swapWithIdx] = toSwap;
      nums[i] = swapWith;
    } else {
      // or increase i
      i++;
    }
  }

  //find the missing element now
  // you do +1 becaue it isn't 0 based since we ignore 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j + 1) {
      return j + 1;
    }
  }

  //in case that the lest element is the missing element
  //if the for loop doesnt return anything
  return nums.length + 1;
};

console.log(firstMissingPositive([3, 0, -2, 1, 2])); //after sorting -2 is at the wrong place so the missing is 4
console.log(firstMissingPositive([-1, -7, -8, -3, 1, 5, 4, 2])); //missing is 3
console.log(firstMissingPositive([3, 2, 5, 1])); //missing is 4 (the 5 is out of bounds)
