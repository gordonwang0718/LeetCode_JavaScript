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
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    var subHead = swapPairs(head.next.next);
    
    head.next.next = head;
    
    var newHead = head.next;
    head.next = subHead;
    
    return newHead;
};