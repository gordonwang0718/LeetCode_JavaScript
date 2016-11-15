// 1 -> 2 -> 3 -> 4 -> 5

// s -------------------
// f -------------------
//      s---------------
//           f----------
//           s----------
//                     f

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
// s ------------------------
// f ------------------------
//      s--------------------
//           f---------------
//           s---------------
//                     f-----

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var findMiddle = function(head) {
	if(head === null) return null;

	var fast = head;
	var slow = head;

	while(fast.next !== null && fast.next.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}