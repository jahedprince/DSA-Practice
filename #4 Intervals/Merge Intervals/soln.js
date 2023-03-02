/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

*/

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  //initialize result array with first array element
  const res = [intervals[0]];
  for (let curr of intervals) {
    //checks the prev element of result array to compare
    let prev = res[res.length - 1];
    //compares start time of new with end time of prev
    if (prev[1] < curr[0]) {
      res.push(curr);
    } else {
      prev[1] = Math.max(curr[1], prev[1]);
    }
  }
  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
/*

Complexity Analysis

Time complexity : O(nlog⁡n)

Other than the sort invocation, we do a simple linear scan of the list, so the runtime is dominated by the O(nlog⁡n)complexity of sorting.

Space complexity : O(log⁡N)(or O(n))

If we can sort intervals in place, we do not need more than constant additional space, although the sorting itself takes O(log⁡n)space. Otherwise, we must allocate linear space to store a copy of intervals and sort that.


*/
