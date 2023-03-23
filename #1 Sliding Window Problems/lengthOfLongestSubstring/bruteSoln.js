/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

const isUnique = (s) => {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return false;
    }
    set.add(s[i]);
  }
  return true;
};

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  for (let begin = 0; begin < s.length; begin++) {
    for (let end = begin; end < s.length; end++) {
      //The substring method in JavaScript extracts the characters in a string between two indices and returns a new string. The first argument specifies the starting index, and the second argument specifies the ending index, but the ending index is exclusive.
      const sub = s.substring(begin, end + 1);
      if (isUnique(sub)) {
        max = Math.max(max, sub.length);
      }
    }
  }
  return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

/*
 
1. Iterate the string using nested loop, check if any of the character exist in hashset or not.

2. If exist in hashset break the current iteration and update the answer.

Complexity:
- Time complexity: O(N^2)
- Space complexity: O(N)

*/
