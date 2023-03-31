var missingNumber = function (nums) {
  //sort the elements first using cyclic sort
  let i = 0;
  while (i < nums.length) {
    //0 based so we wont have to do -1 compared to prev problem
    const newSpot = nums[i];
    // swap the elements
    // second condition is placed so that the element needed to be swapped remains in its place in case the right place is out of bounds
    if (newSpot !== i && newSpot < nums.length) {
      //temp vairable to hold the element
      const toSwap = nums[newSpot];
      nums[newSpot] = newSpot;
      nums[i] = toSwap;
    } else {
      // or increase i
      i++;
    }
  }

  //find the missing element now
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }

  //in case that the lest element is the missing element
  return nums.length;
};

//for the second condition in if statement
console.log(missingNumber([4, 0, 3, 1])); //2 bc 4 is out of bounds
console.log(missingNumber([3, 5, 2, 4, 0, 1])); //6
