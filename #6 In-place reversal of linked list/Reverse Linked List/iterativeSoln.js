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

//Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function (head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let oldNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = oldNext;
  }
  return prev;
};

console.log(reverseList([1, 2, 3, 4, 5]));

/* 
Time Complexity: O(n)
Space Complexity: O(1) --> no extra space used

*/
