var isLongPressedName = function (name, typed) {
  let j = 0; //fast pointer
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[j]) {
      j++;
      /* the case when the char is duplicated.
  example: "abc" and "abbc"
  in the third iteration "b" is not equal "c" but it's equal to the prev.char so it means that the char is duplicated */
    } else if (typed[i] === name[j - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return j === name.length;
};

console.log(isLongPressedName("alex", "alleex"));

/*
The time complexity of this code is O(n + m), where n is the length of the name string and m is the length of the typed string.

The for loop that iterates over the characters in the typed string takes O(m) time.

In the loop, we are performing a constant number of operations in each iteration, and each of these operations takes O(1) time. Therefore, the overall time complexity of the loop is O(m).

The only variable that depends on the length of the name string is j, which represents the index of the next character to be matched in the name string. The value of j can increase by at most n during the loop, so the total time complexity of all operations involving j is also O(n).

Therefore, the overall time complexity of the code is O(n + m).
*/
