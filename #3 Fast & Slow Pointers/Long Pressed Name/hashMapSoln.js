var isLongPressedName = function (name, typed) {
  //base case: compares actual to wrong
  if (
    typed.length < name.length ||
    typed[typed.length - 1] !== name[name.length - 1]
  )
    return false;

  //hasmap to keep track of characters
  const hashmap = new Map();
  let cursorName = 0;

  for (let i = 0; i < name.length; i++) {
    hashmap.set(i, name[i]);
  }
  for (let i = 0; i < typed.length; i++) {
    const character = typed[i];
    if (character === hashmap.get(cursorName)) {
      cursorName++;
    } else if (character !== hashmap.get(cursorName - 1)) {
      return false;
    }
  }

  if (cursorName < name.length - 1) return false;

  return true;
};

console.log(isLongPressedName("alex", "alleex"));

/*
The for loop that follows populates the hashmap with the characters of the name string as key-value pairs. Each key in the hashmap corresponds to an index in the name string, and the value at each key is the character at that index.

The second for loop iterates over the characters in the typed string. For each character, the function checks whether it matches the character at the current position in the name string (as indicated by the cursorName variable). If the characters match, then the cursorName is incremented to move to the next position in the name string. If the characters do not match, then the function checks whether the current character matches the previous character in the name string (as indicated by the cursorName - 1 index in the hashmap). If it does not match the previous character, then the function returns false, indicating that it is not possible that the typed characters represent the friend's name.

After the for loop finishes, the function checks whether the cursorName has reached the end of the name string. If it has not, then the function returns false. Otherwise, the function returns true, indicating that it is possible that the typed characters represent the friend's name.
 */

/*
The time complexity of the code is O(n + m), where n is the length of the name string and m is the length of the typed string.

The for loop that populates the hashmap with the characters of the name string takes O(n) time.

The second for loop that iterates over the characters in the typed string takes O(m) time.
*/
