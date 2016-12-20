
// Case 1: With head, prev = head, prev.next.val ==== target --> prev.next = prev.next.next

// LC 203 Remove Linked List Elements 
var removeElements = function(head, val) {
 	if(head === null || val === null) return head;

 	var dummy = new ListNode(0);
 	var node = dummy;
 	node.next = head;

 	while(node.next !== null) {
 		if(node.next.val === val) {
 			node.next = node.next.next;
 		} else {
 			node = node.next
 		}
 	}

 	return dummy.next;
};

// Case 2: Without head, you can only access the ListNode that you will delete

// LC 083 Delete Node in a Linked List
var deleteNode = function(node) {
	node.val = node.next.val;
	node.next = node.next.next;
};