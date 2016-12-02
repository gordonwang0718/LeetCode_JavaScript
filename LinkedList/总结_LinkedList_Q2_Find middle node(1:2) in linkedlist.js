

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// S1: fast.next !== null && fast.next.next !== null 对于奇偶通用
var findMiddle = function(head) {
	if(head === null || head.next === null) return head;
	var slow = head;
	var fast = head;
	while(fast.next !== null && fast.next.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}


// S2: 加上一个dummy node, fast !== null && fast.next !== null
var findMiddle = function(head) {
	if(head === null || head.next === null) return head;
	var dummyNode = new ListNode(0),
	    dummyNode.next = head;
	var slow = dummyNode;
	var fast = dummyNode;
	while(fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}
