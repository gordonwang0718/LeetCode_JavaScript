

Linked List 1     1   -->   3   -->   5   -->   7   -->   null

Linked List 2     2   -->   4   -->   6   -->   null

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Solution 1: iterative (dummy node) // 146 ms;

var mergeTwoLists = function(l1, l2) {
	if(l1 === null) return l2;
	if(l2 === null) return l1;

	var dummy = new ListNode(0);
	var node = dummy;

	while(l1 !== null && l2 !== null) {
		if(l1.val < l2.val) {
			node.next = l1;
			l1 = l1.next;
		} else {
			node.next = l2;
			l2 = l2.next;
		}
		node = node.next;
	}

	if(l1 !== null) {
		node.next = l1;
	} else {
		node.next = l2;
	}

	return dummy.next;
};



// Solution 2: iterative (no dummy node) // 135ms

var mergeTwoLists = function(l1, l2) {
	if(l1 === null) return l2;
	if(l2 === null) return l1;
	var head, cur;
	if(l1.val < l2.val) {
		head = l1;
		l1 = l1.next;
	} else {
		head = l2;
		l2 = l2.next;
	}
	cur = head;

	while(cur.next !== null) {
		if(l1.val < l2.val) {
			cur.next = l1;
			l1 = l1.next;
		} else {
			cur.next = l2;
			l2 = l2.next;
		}
		cur = cur.next;
	}

	if(l1 !== null) {
		cur.next = l1;
	} else {
		cur.next = l2;
	}

	return head;
};

// Solution 3: recursion // 142ms
var mergeTwoLists = function(l1, l2) {
	if(l1 === null) return l2;
	if(l2 === null) return l1;

	if(l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};
