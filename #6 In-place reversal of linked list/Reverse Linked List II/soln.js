/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

/*
We can split this problem into 2 problems:
    1. Find where the reversal should begin (start of left)
    2. Reverse the section between left to right

#1 Where the reversal should begin:
We need to set a pointer to the node right before the reversed section of the list. If we keep a pointer position and use the condition position<left we can traverse through the linked list and set a start pointer to the node prior to where the reversal starts. 

#2 Reverse the section between left and right:
Now that we have the node prior to where the reversal begins, we need to set a tail pointer that points to the beginning of the reversed list. Reason? Because we know the first node will be the tail of the reversedList we need that reference in order to assign its next value to whatever of the original list is left over. (HAVE TAIL REMAIN THE SAME TO CONNECT TO THE LEFT)

Once we set the tail to the current node which is the beginning of the reversed list, we can traverse through this section with the condition position >= left && position <= right which is the portion that needs to be reversed. I highly recommend checking out the reverse linked list problem which is all the logic we need here. We simply just reverse this portion of the linkedlist and set the prev to null which is used to keep track of the reversedList. 

Now because we have the start pointer before the reversal begin, all we need to do is set the starts next property to the (reversedList) and because the tail pointer is now set to the end of the reversedlist we can set the tail's next pointer to the current node which is the left over portion of the list.

One caveat:

The reason why this ternary return statement is needed: left > 1 ? head : reversedList at the end is because if left is equal to 1 there is essentially no start value ever set. We are reversing from the beginning of the list, so we can just return the reversedList which will have the reversed portion of the list and whatever is left over.

Basicall,y  if left is equal to 1, we have no need to connect start list with reversed list reversed list itself is the start (or the head).

*/
var reverseBetween = function (head, left, right) {
  let current = head,
    start = head,
    position = 1;

  while (position < left) {
    start = current;
    current = current.next;
    position++;
  }

  //prev is reversedList
  //prev is needed to keep track of the end of the reversed list just like the original problem
  let prev = null,
    tail = current;

  while (position >= left && position <= right) {
    let oldNext = current.next;
    current.next = prev;
    prev = current;
    current = oldNext;
    position++;
  }
  start.next = prev;
  tail.next = current;

  return left > 1 ? head : prev;
};

console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4));
