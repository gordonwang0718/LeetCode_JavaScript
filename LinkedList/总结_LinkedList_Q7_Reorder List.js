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
    var midHead = findMiddle(head);
    var tail = reverse(midHead);
    midHead.next = null;
    merge(head, tail);
}；

function findMiddle(head) {
    var slow = head;
    var fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
    
function reverse(head) {
    var newHead = new ListNode(0);
    while(head) {
        var tmp = head.next;
        head.next = newHead;
        newHead = head;
        head = tmp;
    }
    return newHead;
}
    
function merge(head1, head2) {
    var index = 0;
    var dummy = new ListNode(0);
    var node = dummy;
    
    while(head1 && head2) {
        if(index % 2 === 0) {
            node.next = head1;
            head1 = head1.next;
        } else {
            node.next = head2;
            head2 = head2.next;
        }
        node = node.next;
        index++;
    }
        
    if(head1) {
        node.next = head1;
    } else {
        node.next = head2;
    }
}