/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// S1: With Dummy Node
var insertNode = function(head, target) {
	var newNode = new ListNode(target);
	var dummy = new ListNode(0);
	var pre = dummy;
	    pre.next = head;
	var next;
	while(pre.next && pre.next.val <= target) {
		pre = pre.next;
	}
	pre.next = newNode;
	newNode.next = cur;
	return dummy.next;
}
// S2: Without Dummy Node
var insertNode = function(head, target) {
	var newNode = new ListNode(target);
	if(head === null || head.val >= target) {
		newNode.next = head;
		return newNode;
	}
	var pre = head;
	while(pre.next && pre.next.val <= target.val) {
		pre = pre.next;
	}
	newNode.next = pre.next;
	pre.next = newNode;
	return head;
}