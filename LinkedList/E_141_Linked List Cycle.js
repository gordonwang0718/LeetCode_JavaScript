/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head;
    var fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next; 
        if(slow === fast || fast && fast.next === slow) {
            return true;
        }
    }
    
    return false;
};