var lengthOfLongestSubstringTwoDistinct = function (s) {
  let k = 2;
  let map = new Map();
  let start = 0;
  let maxLen = 0;

  //k represents at most k distinct
  //map to keep track of count of each variable until end as we increment
  //we make start be at 0 and change if we get more than k distinct because we want to keep moving start till we are at k or less
  //maxLen keeps track of length of end-start+1

  //we have for loop to change the end one by one
  for (let end = 0; end < s.length; end++) {
    let char = s[end];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }

    //These lines move the start of the sliding window to the right until the size of the Map is 2 or less. (because if the size of the map which holds distinct characters is > 2 that shouldn't be the case).
    //if it is, you want to get rid of the leftmost character

    //During this process, the frequency of the leftmost character in the Map is decremented until it is no longer in the Map, effectively removing it from the sliding window.
    while (map.size > k) {
      let leftChar = s[start];
      let count = map.get(leftChar);
      if (count > 1) {
        map.set(leftChar, count - 1);
      } else {
        map.delete(leftChar);
      }
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};

let s = "eceba";
console.log(lengthOfLongestSubstringTwoDistinct(s));

/*
The code uses a map to keep track of the frequency of each character in the current sliding window. The variable start is used to keep track of the start of the sliding window, and maxLen is used to keep track of the length of the longest substring with at most two distinct characters seen so far.

The code iterates through the string from left to right, adding each character to the map and updating its frequency. If the size of the map exceeds 2 (i.e., we have more than two distinct characters in the sliding window), we move the start of the window to the right until the size of the map is 2 or less. During this process, we decrement the frequency of the leftmost character in the map until it is no longer in the map, which effectively removes it from the sliding window.

After each iteration, we update maxLen to be the maximum of its current value and the length of the current sliding window (i.e., i-start+1).

Finally, we return maxLen as the result.
*/

//Time Complex: O(n)
