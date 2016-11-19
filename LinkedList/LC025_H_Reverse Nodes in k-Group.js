
/** 
 * For example,
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 // Solution 1: Iteration




 // Solution 1: Recursion (122ms)
Diagram:
(head ==> 1, k ==> 3)
  org    head    head.next
======>   1   ===>   2   ===>   3   ===>   4   ===>    5    ===>   null
 i = 0    cur
-----------------------------------------------------------------------
  org    head    head.next
======>   1   ===>   2   ===>   3   ===>   4   ===>    5    ===>   null
 i = 1              cur
-----------------------------------------------------------------------
  org    head    head.next
======>   1   ===>   2   ===>   3   ===>   4   ===>    5    ===>   null
 i = 2                         cur
-----------------------------------------------------------------------
  org    head    head.next
======>   1   ===>   2   ===>   3   ===>   4   ===>    5    ===>   null
 i = 3                                    cur
-----------------------------------------------------------------------

var reverseKGroup = function(head, k) {
    if(head === null || k === 1) return head;
    var dummy = new ListNode(0);
        dummy.next = head;
    var pre = dummy;
    var i = 0;
    
    while(head !== null){
        i++;
        if(i % k === 0){
            pre = reverse(pre, head.next);
            head = pre.next;
            
        }else {
            head = head.next;
        }
    }
    return dummy.next;
    
    function reverse(pre, next) {
        var last = pre.next;
        var cur = last.next;
        while (cur !== next){
            last.next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
            cur = last.next;
        }
        return last;
    }
};



var reverseKGroup = function(head, k) {
    if(head === null || k === 1) return head;
    // var dummy = new ListNode(0);
    //     dummy.next = head;
    // var pre = dummy;
    var i = 0;
    
    while(head !== null){
        i++;
        if(i % k === 0){
            var subHead = reverse(head);
            he
            
        }else {
            head = head.next;
        }
    }
    return dummy.next;
    
    function reverse(pre, next) {
        var last = pre.next;
        var cur = last.next;
        while (cur !== next){
            last.next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
            cur = last.next;
        }
        return last;
    }
};