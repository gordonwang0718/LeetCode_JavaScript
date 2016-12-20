// Solution 1:
// Extra O(n) space: reverse the whole linked list and pair merge

// Solution 2:
// In place without alter nodes' value
// find middle --> reverse half part --> merge

// Pseudo code:
// var reOrder = function(head) {
// 	corner case;
// 	var mid = findMiddle(head);
// 	var oneHead = head;
// 	var twoHead = mid.next;
// 	mid.next = null;
// 	return merge(oneHead, reverse(twoHead));
// }

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

// Solution 1:
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

// Solution 2:

var reorderList = function(head) {
    if(head === null || head.next === null) return;
    
    var mid = findMiddle(head);
    var left = head;
    var right = mid.next;
    mid.next === null;
    merge(left, reverse(right));
    
    
    function findMiddle(head) {
        if(head === null || head.next === null) return head;
        var slow = head;
        var fast = head;
        while(fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    function reverse(head) {
        if(head === null || head.next === null) return head;
        // var newHead = reverse(head.next);
        // head.next.next = head;
        // head.next = null;
        // return newHead;
        var pre = null;
        var cur = head;
        var next = null;
        while(cur !== null) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
    
    function merge(left, right) {
        var dummy = new ListNode(0);
        var cur = dummy;
        var l1 = left, l2 = right;
        while(l1 !== null && l2 !== null) {
            cur.next = l1;
            l1 = l1.next;
            cur = cur.next;
            cur.next = l2;
            l2 = l2.next;
            cur = cur.next;
        }
        if(l1) cur.next = l1;
        return dummy.next;
    }
};