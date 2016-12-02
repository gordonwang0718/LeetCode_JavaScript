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

// Solution 1: Dummy Node (109ms)
Diagram:
                     head
====>   dummy   ===>   1   ===>   2   ===>   3   ===>   4   ===>   null
 org     pre         last        cur
=======================================================================
====>   dummy   ===>   1   ===>   2   ===>   3   ===>   4   ===>   null
 1st                                     last.next
                    cur.next
                               pre.next
                                             cur
====>   dummy   ===>   1   ===>   2   ===>   3   ===>   4   ===>   null
 2nd                                                last.next
                               cur.next
                                           pre.next
                                                       cur
====>   dummy   ===>   1   ===>   2   ===>   3   ===>   4   ===>   null
 3rd                                                             last.next
                                           cur.next
                                                     pre.next
                                                                    cur
====>   dummy   ===>   4   ===>   3   ===>   2   ===>   1   ===>   null

var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    var dummy = new ListNode(0);
        dummy.next = head;
    var pre = dummy;
    var cur = head.next;
    var last = head;
    while(cur) {
        last.next = cur.next;
        cur.next = pre.next;
        pre.next =cur;
        cur = last.next;
    }
    return dummy.next;
    
};

// Solution 2: Iteration (95ms)
Diagram:
       head
====>   1   ===>   2   ===>   3   ===>   4   ===>   null
 org   curr    curr.next
========================================================
 1st              next
       prev       curr                             
========================================================
 2nd                         next
 	 curr.next    prev       curr
========================================================
 3rd                                    next
                curr.next    prev       curr 
========================================================
4th                                                 next
                           curr.next    prev        curr
====>   1   <===   2   <===   3   <===   4   <===   null  

var reverseList = function(head) {
    if(head === null || head.next === null) return head;
  
    var prev = null;
    var curr = head;
    var next = null;
    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// Solution 3: Recursion (119ms)
Diagram:

 org   head    head.next
====>   1   ===>   2   ===>   3   ===>   4   ===>   null
 1st   head    head.next
====>   2   ===>   3   ===>   4   ===>   null
 2nd   head    head.next
====>   3   ===>   4   ===>   null
 3rd   head    head.next
====>   4   ===>   null
=========================================================
 4th   head    head.next
====>   4   <===   null    
      newHead
 5th   head    head.next
====>   3   <===   4   <===   null    
                newHead
 6th   head    head.next
====>   2   <===   3   <===   4   <===   null    
                           newHead
 7th   head    head.next
====>   1   <===   2   <===   3   <===   4   <===   null    
                                       newHead
 8th   head    head.next
====>  null <===   1   <===   2   <===   3   <===   4   <===   null    
                                                 newHead

var reverseList = function(head) {
    if(head === null || head.next === null) return head;

    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};


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

// reverse Linked List by K group

var reverseKGroup = function(head, k) {
    var checkHead = check(head, k);

    if(checkHead === null) return head;
    var newHead = reverseKGroup(checkHead.next, k);
    var pre = head,
        cur = head.next.next;

    while(k > 1) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        k--;
    }

    head.next = newHead;
    return pre;

    function check(head, k) {
        if(head === null || k <= 1) return head;
        while(k > 1) {
            k--;
            head = head.next;
            if(head === null) return head;
        } // 1 -> 3 -> 4 k = 3
        return head;
    }
}



