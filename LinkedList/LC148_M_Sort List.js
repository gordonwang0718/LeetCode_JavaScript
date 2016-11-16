   h
   6   -->   4   -->   1   -->   5    -->   7   -->   null
  head1               mid
  head2
  ---------------------------> head1
  ----------------->  mid       null


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

var sortList = function(head) {
    var head1 = head;
    var head2 = head;
    
    if (head === null || head.next === null) return head;
    
    var mid = findMiddle(head);
    head1 = mid.next;
    mid.next = null;
    
    head1 = sortList(head1);
    head2 = sortList(head);
    
    return merge(head2, head1);
    
    function findMiddle(head) {
        var slow = head;
        var fast = head;
        while(fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    function merge(a, b) {
        var dummy = new ListNode(0),
            node = dummy;
            
        while (a && b) {
            if (a.val < b.val) {
                node.next = a;
                a = a.next;
            } else {
                node.next = b;
                b = b.next;
            }
            node = node.next;
        }
        
        if (a) {
            node.next = a;
        } else {
            node.next = b;
        }
        
        return dummy.next;
    }
};

