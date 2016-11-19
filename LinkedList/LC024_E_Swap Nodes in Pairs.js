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

Diagram:

 org    head      head.next   head.next.next
====>    1    ====>    2    ====>    3    ====>    4    ====>   null
 1st    head      head.next   head.next.next
====>    3    ====>    4    ====>   null
 2nd    head      head.next   head.next.next
====>   null  ====>  null   ====>   null
=========================================================
 4th    head      head.next   head.next.next
====>    3    <====    4            null               null  <-  3  <-  4 
         ==========================>
                    newHead       subHead
 5th    head      head.next   head.next.next
====>    1    <====    2             3    ====>    4    <====   null  
         ===========================>           
                    newHead       subHead                                                                                                  

// O(n)
var swapPairs = function(head) {
    if(head === null || head.next === null) return head;
    var subHead = swapPairs(head.next.next);
    
    head.next.next = head;
    
    var newHead = head.next;
    head.next = subHead;
    
    return newHead;
};



