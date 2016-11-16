/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


var insert = function(head, val) {

	var newNode = new ListNode(val);

	if(head === null || head.val >= val) {
		newNode.next = head;
		return newNode;
	}

	var prev = head;
	while(prev.next !== null && prev.next.val < val) {
		prev = prev.next;
	}

	newNode.next = prev.next;
	prev.next = newNode;
	return head;
}