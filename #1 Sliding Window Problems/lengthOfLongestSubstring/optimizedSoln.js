/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let begin = 0;
  let set = new Set();

  for (let end = 0; end < s.length; end++) {
    //first want to check if it's in set before adding
    while (set.has(s[end])) {
      set.delete(s[begin]);
      begin++;
    }
    set.add(s[end]);
    max = Math.max(max, end - begin + 1);
  }
  return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

/*
Sliding Window Technique: 
In this case, the window is defined by the variables begin and end, which are initialized to 0 and are used to represent the beginning and end of the substring being considered.

The for loop is used to iterate through the string s and move the sliding window to the right by incrementing the end index. As we move the window, we check whether the character at the new end index is already present in the set using the Set.prototype.has() method. If it is, we move the window to the right by incrementing the begin index until we remove the first occurrence of the repeated character from the window. Once we remove the repeated character, we can add the new character at end to the window.

Finally, we keep track of the maximum length of the non-repeating substring seen so far using the max variable, which is updated every time we find a new non-repeating substring that is longer than the current maximum. The length of the current non-repeating substring is given by end - begin + 1.
*/
