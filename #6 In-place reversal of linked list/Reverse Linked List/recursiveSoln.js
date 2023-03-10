/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Given the head of a singly linked list, reverse the list, and return the reversed list

var reverseList = function (head) {
  // Base case
  if (head == null || head.next == null) return head;
  // Create a new node to call the function recursively and we get the reverse linked list
  // the new node will hold the head of the smaller sub-problems
  var res = reverseList(head.next);
  // Set new head node's next to point back its next
  head.next.next = head;
  //set head's next to be null in case it is the last node
  head.next = null;
  return res; // Return the reverse linked list...
};

console.log(reverseList([1, 2, 3, 4]));

//ex. after recursive call it will end at 4 and make it the head from the base case

//then the call stack will be 4 -> null
// the next call stack will be 4 -> (3 -> null)

// 1 -> 2 -> 3 -> 4 -> null
// null <- 4 (head): return this to the upper call stack recursive call
//2-> [(null <-) 3 (new head) <- 4]: this is the recursive(3) call, 2 still is pointing to 3, but after the recursive(3) stack 3 points to null
//1->[(null <-) 2 (new head) <- 3  <- 4]: recursive(2)
//(null <-) 1 <- 2 (new head) <- 3  <- 4: recursive (1)highest call stack

//**each of the recursive calls tell it to return the recursive list of the next node and keeps doing so until it reaches base case
