/**
 * @param {character[][]} grid
 * @return {number}
 */

/*
BFS is lowest space complexity solution.

Intuition:
We need to go through our matrix and perform a breadth first search on every 1. We can identify a new island if we have not already visited it from our bfs.

Approach:
1. Initialize a count of islands variable
2. Loop through the matrix. If we identify a 1 that we have not visited, we increment our count and call a bfs helper function on it.

BFS Helper function:
1. BFS initializes a queue with a starting [row, col]
2. While queue has a length, which we save as a variable before adding to our queue, we travel in all four directions from our queue searching for 1s to add to our visited set and pushing them onto our queue to perform a bfs on them.

*/

var numIslands = function (grid) {
  let countIslands = 0;

  // this nested for loop would iterate throguh the entire grid to find anymore islands
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        countIslands++;

        // bfs would spread to find more pieces of its current island, then make them all '0' so finding other islands would be easier
        bfs(grid, i, j);
      }
    }
  }
  return countIslands;
};

//makes all the adjacent 1s to 0s, and keeps making the 'child' 1s to 0s, so it can check to see if the other islands are connected or not
function bfs(grid, r, c) {
  let totalRows = grid.length;
  let totalCols = grid[0].length;

  // use the positions as queues since that is where the bfs would spread
  let queue = [[r, c]];
  while (queue.length > 0) {
    let curr = queue.shift();
    let currRow = curr[0];
    let currCol = curr[1];

    // if its less than 0, its out of bounds, if its equal to to the total, then it is also out of bounds since arrays start at 0, while lengths starts at 1 if an element exists inside
    if (
      currRow < 0 ||
      currRow == totalRows ||
      currCol < 0 ||
      currCol == totalCols
    ) {
      continue;
    }

    // if equal to 0 then continue since 0 is not apart of the islands
    if (grid[currRow][currCol] == "0") {
      continue;
    }

    // if found an island/parts of an island, convert it to 0
    if (grid[currRow][currCol] == "1") {
      grid[currRow][currCol] = "0";
    }

    // looks in all directions if found an island/parts of an island
    queue.push([currRow + 1, currCol]);
    queue.push([currRow - 1, currCol]);
    queue.push([currRow, currCol + 1]);
    queue.push([currRow, currCol - 1]);
  }
}

let grid = (grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);

console.log(numIslands(grid));

/*
TC: O(M*N), where m = # of rows and n = # of cols
SC: O(min(M,N)), because in worst case where the grid is filled with lands, the size of queue can grow up to min(M,N)
 */
