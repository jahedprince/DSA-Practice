function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    const toSort = arr[i];
    //since it's 0-based index
    const newSpot = arr[i] - 1;
    // check that they are not already sorted or in correct place
    if (toSort !== i && arr[newSpot]) {
      // swap the elements
      const swapWith = arr[newSpot];
      arr[newSpot] = toSort;
      arr[i] = swapWith;
    } else {
      // or increase i until you find unsorted numbers
      i++;
    }
  }

  return arr;
}

console.log(cyclicSort([4, 0, 3, 1])); //2
console.log(cyclicSort([3, 5, 2, 4, 0, 1])); //6
