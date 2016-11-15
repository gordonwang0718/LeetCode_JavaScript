/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null) return null;
    var fast = head;
    var slow = head;
    var flag = false;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) {
            flag = true;
            break;
        }
    }
    
    if(flag) {
        fast = head;
        while(fast !== slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow;
    } else {
        return null;
    }
};