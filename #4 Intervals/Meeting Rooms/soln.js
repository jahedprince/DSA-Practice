/*

Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

*/
var canAttendMeetings = function (intervals) {
  if (!intervals || intervals.length === 1) return true;

  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }
  return true;
};

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

/*
  Time complexity : O(nlog⁡n)O(n \log n)O(nlogn). The time complexity is dominated by sorting. Once the array has been sorted, only O(n)O(n)O(n) time is taken to go through the array and determine if there is any overlap.
  
  Space complexity : O(1)O(1)O(1). Since no additional space is allocated.  
*/
