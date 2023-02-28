[1, 9][(7, 10)][(2, 5)][(1, 10)];

var canAttendMeetings = function (intervals) {
  let j;
  const len = intervals.length;
  for (let i = 0; i < len - 1; i++) {
    let a = intervals[i];
    for (let j = i + 1; j < len; j++) {
      let b = intervals[j];
      /*
      Two cases where it can overlap:
      [1, 9][7, 10]
      
      [2,5][1,10]
      */

      if ((a[0] <= b[0] && a[1] > b[0]) || (a[0] >= b[0] && a[0] < b[1]))
        return false;
    }
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
Because we have two check every meeting with every other meeting, the total run time is O(n^2).

No additional space is used, so the space complexity is O(1).
 */
