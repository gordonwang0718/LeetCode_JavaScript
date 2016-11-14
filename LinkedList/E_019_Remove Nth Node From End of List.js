/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var nodeA = head;
    var nodeB = head;
    var i = 0;
    
    if(head === null) return null;
    
    /** 一个指针先走 N 步，
     *  然后两个同步走，直到第一个走到终点，
     *  第二个指针就是需要删除的节点。
     */

    while(nodeA.next) {
        nodeA = nodeA.next;
        if(i < n) {
            i++;
        } else {
            nodeB = nodeB.next;
        }
    }

    /** Head 头指针的处理，比如 1 <- 2, 这是就要删除头指针
     */
    
    if(i < n) {
        head = head.next;
        return head;
    }
    
    if(nodeB.next) {
        nodeB.next = nodeB.next.next;
        return head;
    }
    
    return null;
};