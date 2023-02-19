/*
Given a string s, return the length of the longest 
substring that contains at most two distinct characters.

Example 1:

Input: s = "eceba"
Output: 3
Explanation: The substring is "ece" which its length is 3.
*/

var lengthOfLongestSubstringTwoDistinct = function (s) {
  let max = 0;

  // start window
  for (let start = 0; start < s.length; start++) {
    const set = new Set();

    // build window
    for (let end = start; end < s.length; end++) {
      const size = end - start + 1;

      set.add(s[end]);
      if (set.size === 3) break; // break, more than 2 characters

      max = Math.max(max, size); // update max substring length
    }
  }

  return max;
};
let s = "eceba";
console.log(lengthOfLongestSubstringTwoDistinct(s));

//Time Complex: O(n^3)

// function lengthOfLongestSubstringTwoDistinct(s) {
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let set = new Set(s.slice(i, j + 1));
//       if (set.size <= 2) {
//         max = Math.max(max, j - i + 1);
//       }
//     }
//   }
//   return max;
// }

//For K distinct
// var lengthOfLongestSubstringKDistinct = function(s, k) {
//     let maxLength = 0;
//     for (let i = 0; i < s.length; i++) {
//         for (let j = i; j < s.length; j++) {
//             let subStr = s.substring(i, j+1);
//             let charSet = new Set(subStr);
//             if (charSet.size <= k) {
//                 maxLength = Math.max(maxLength, subStr.length);
//             }
//         }
//     }
//     return maxLength;
// };
