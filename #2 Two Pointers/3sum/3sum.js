/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

var threeSum = function (nums) {
  // having the numbers in ascending order will make this problem much easier.
  // also, knowing the overall problem  will take at least O(N^2) time, we can
  // afford the O(NlogN) sort operation
  nums.sort((a, b) => a - b);
  const result = [];

  //// `i` represents the "left" most number in our sorted set.
  for (let i = 0; i < nums.length; i++) {
    // `low` represents the "middle" element between `i` and `k`.
    // we will increment this up through the array while `i` and `high`
    // are anchored to their positions. we will decrement `high` for
    // for each pass through the array, and finally increment `i`
    // once `low` and `high meet.
    let low = i + 1,
      high = nums.length - 1,
      sum = 0;

    // to summarize our setup, we have `i` that starts at the beginning,
    // `high` that starts at the end, and `low` that races in between the two.
    //
    // note that `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `low` and `high` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (low < high) {
      sum = nums[i] + nums[low] + nums[high];

      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low + 1] === nums[low]) low++;
        while (nums[high - 1] === nums[high]) high--;
        low++;
        high--;
      } else if (sum < 0) low++;
      else high--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
