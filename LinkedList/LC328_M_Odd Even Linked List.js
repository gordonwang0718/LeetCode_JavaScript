
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
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }
    
    var oddHead = head,
        evenHead = head.next,
        oddTail = oddHead,
        evenTail = evenHead,
        node = head.next;
        
    while (node && node.next) {
        oddTail.next = node.next;
        evenTail.next = node.next.next;
        oddTail = oddTail.next;
        evenTail = evenTail.next;
        node = oddTail.next;
    }
    
    oddTail.next = evenHead;
    
    return oddHead;

};