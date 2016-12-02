
     head
===>   1  --->   2   --->   3   --->   4   --->   5   --->   6   --->   null
 org oHead     eHead
     oTail     eTail
                node
===> while(node && node.next)
===>   1  --->   2   --->   3   --->   4   --->   5   --->   6   --->   null
     oHead     
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
        node = node.next;
    }
    
    oddTail.next = evenHead;
    
    return oddHead;

};

// Delete Odd node in LinkedList
public class LongestCommonSubstring {
    public ListNode deleteOdd(ListNode head) {
        if(head == null || head.next == null) return null;
        ListNode newHead = head.next;
        ListNode cur = newHead;
        head.next = null; 
        while (cur != null && cur.next != null) {
            ListNode temp = cur.next;
            cur.next = cur.next.next; 
            temp.next = null; 
            cur = cur.next;
        }
    return newHead;
    }
}
