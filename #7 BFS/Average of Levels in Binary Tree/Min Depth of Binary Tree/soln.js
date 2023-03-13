/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
*/

var averageOfLevels = function (root) {
  const result = [];
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];
    let sum = 0;
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      sum = sum + currentNode.val;
      currentLevel.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(sum / levelSize);
  }
  return result;
};

console.log(averageOfLevels([3, 9, 20, null, null, 15, 7]));

/*
T.C: O(N) - The whole tree is traversed atmost once. Here, n refers to the number of nodes in the given binary tree.
S.C: O(M) - The size of queue or temp can grow upto atmost the maximum number of nodes at any level in the given binary tree. Here, m refers to the maximum mumber of nodes at any level in the input tree.
*/
