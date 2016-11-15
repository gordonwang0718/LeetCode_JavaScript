1 -> 2 -> 3 -> 1 -> 4 -> 1 -> 2......
s ------------------------
f ------------------------
     s -------------------
          f --------------
          s --------------
                    f ----
               s ---------
     f -------------------
                    s-----
               f----------
s ------------------------
f ------------------------                              

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 var checkLinkedlistCycle = function(head) {
 	if(head === null) return false;

 	var slow = head;
 	var fast = head;

 	while(fast !== null && fast.next !== null) {
 		slow = slow.next;
 		fast = fast.next.next;
 		if(slow === fast || fast && fast.next === slow) {
 			return true;
 		}
 	}
 	return false;

}