
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var cur = head;
    var next, preHead, preTail, afterHead, afterTail;
    
    if (head === null) return head;
    
    while(cur !== null) {
        next = cur.next;
        cur.next = null;
        if (cur.val < x) {
            if (!preHead) {
                preHead = cur;
                preTail = cur;
            } else {
                preTail.next = cur;
                preTail = cur;
            }
        } else {
            if (!afterHead) {
                afterHead = cur;
                afterTail = cur;
            } else {
                afterTail.next = cur;
                afterTail = cur;
            }
        }
        cur = next;
    }
    
    if (preTail) {
        preTail.next = afterHead;
        return preHead;
    } else {
        return afterHead;
    }
};