

=====>   1   --->   2   --->   3   --->   4   --->   null

org =>   1   --->   2   --->   4   --->   3   --->   null
         f       f.next        s        s.next
1st =>            next1                  next2
                    s                   f.next
                    f                      s
2nd =>                        next1                  next2
                                s       f.next            
                                f                      s

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 var reorderList = function(head) {
    var fast = head;
    var slow = head;
    var next1, next2, midHead;
    
    if (head === null || head.next === null) return;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    if (fast) {
        midHead = reverse(slow.next);
    } else {
        midHead = reverse(slow);
    }
    
    fast = head;
    slow = midHead;
    
    while(fast && slow) {
        next1 = fast.next;
        next2 = slow.next;
        
        slow.next = fast.next;
        fast.next = slow;
        
        fast = next1;
        slow = next2;
    }
    
    if (fast) {
        fast.next = null;
    }
    
    function reverse(head) {        
        if(head === null || head.next === null) return head;
        var newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
};