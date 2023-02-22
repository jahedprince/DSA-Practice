/**
 * Definition for singly-linked list.
 *  function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  // we create our ListNode and initialize tail
  let head = new ListNode(),
    tail;

  //Check if one of the lists is null (empty) we return the other list
  if (!list1 || !list2) {
    return list1 || list2;
  }

  //Check for starter value for our head
  // if list1 value less, then add it to our resList
  // if list2 vice versa
  // And we have to move our pointer after adding
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  //We should do this, because we have to return head, so we save our head pointer and continue with tail pointer
  tail = head;

  //start the loop and keep going before one of the lists is not empty
  while (list1 && list2) {
    //Check for smaller one
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    //Move our tail pointer
    tail = tail.next;
  }

  //So we can face problem
  // lists can have differrent length, so we should add remaining part of exists list to our tail
  tail.next = list1 || list2;

  // Return our head
  return head;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// var mergeTwoLists = function(l1, l2) {
//     if(!l1 || !l2) return l1 || l2;
//     if(!l1 && !l2) return null;

//     let dummy = new ListNode(-1);
//     let curr = dummy;

//     while(l1 && l2){
//         if(l1.val <= l2.val){
//             curr.next = new ListNode(l1.val);
//             l1 = l1.next;
//         }else{
//             curr.next = new ListNode(l2.val);
//             l2 = l2.next;
//         }
//         curr = curr.next;
//     }
//     curr.next = l1 || l2;

//     return dummy.next;
// }

// The time complexity of this algorithm is O(m+n), where m and n are the lengths of the input linked lists. This is because the algorithm iterates through both linked lists once, comparing each element and adding them to the new list in the correct order.

/*
The algorithm first checks if either of the input linked lists is null or undefined. If one of them is, it returns the other linked list. If both are null or undefined, it returns null.

If both linked lists are not empty, it creates a new linked list called "dummy" with a single node containing the value -1. This is done to simplify the algorithm and avoid having to deal with edge cases for the first node.

Then, it creates a variable called "curr" that initially points to the "dummy" node.

The algorithm then iterates through both linked lists using a while loop. While both linked lists are not empty, it compares the first element of each list and adds the smaller element to the new list. It then moves the pointer of the linked list from which the smaller element was taken to the next element.

The algorithm continues this process until one of the input linked lists is exhausted. At this point, it adds the remaining elements of the other linked list to the new list by setting the "next" property of the "curr" node to the remaining linked list.

Finally, the algorithm returns the "next" property of the first node in the "dummy" linked list, which is the merged and sorted linked list.
*/
