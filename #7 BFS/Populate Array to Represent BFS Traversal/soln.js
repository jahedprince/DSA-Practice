class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
/*
Queues are most likely used to traverse this data structure (FIFO)

1. result array to keep track of level subarrays
2. queue to keep track of nodes that we're traversing 
3. push root node onto queue to start off
4. while there are nodes in queue (focuses on currentLevel at a time)
    a. initialize currentLevel subarray 
    b. capture the levelSize which will be queue.length
    c. for the levelSize, collect all the current level's children and push to currentLevel to later push to result array  after going thru all the nodes in that level (the levelSize tells you how many nodes to look at for its children)
    d. push currentLevel subarray into result array
    e. repeat until no nodes left in queue
*/
const levelOrderTraverse = function (root) {
  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
    //capture level size, queue.length
    const levelSize = queue.length;
    //initialize currentLevel subarray
    const currentLevel = [];
    //loop through levelSize and add children to queue
    for (let i = 0; i < levelSize; i++) {
      // to see which node we are currently focusing on in that level
      const currentNode = queue.shift();
      //add nodes to currentLevel subarray
      currentLevel.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    //push currentLevel subarray to the result array at the end of each while loop iteration
    result.push(currentLevel);
  }

  return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(levelOrderTraverse(root));
