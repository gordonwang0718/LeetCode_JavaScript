/*Q0: Insert a node into sorted Linked list*/

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

/*Q1: Insertion Sort List(LC147)*/
var insertionSortList = function(head) {
    var dummy = new ListNode(0),
        pre = dummy,
        cur = head,
        next;
        
    while(cur !== null) {
        next = cur.next;
        pre = dummy;
        
        while (pre.next && pre.next.val <= cur.val) {
            pre = pre.next;
        }
        
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    
    return dummy.next;
};

/*Q2: Sort List*/
var sortList = function(head) {
    var head1 = head;
    var head2 = head;
    
    if (head === null || head.next === null) return head;
    
    var mid = findMiddle(head);
    head1 = mid.next;
    mid.next = null;
    
    head1 = sortList(head1);
    head2 = sortList(head);
    
    return merge(head2, head1);
    
    function findMiddle(head) {
        var slow = head;
        var fast = head;
        while(fast.next !== null && fast.next.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
    function merge(a, b) {
        var dummy = new ListNode(0),
            node = dummy;
            
        while (a && b) {
            if (a.val < b.val) {
                node.next = a;
                a = a.next;
            } else {
                node.next = b;
                b = b.next;
            }
            node = node.next;
        }
        
        if (a) {
            node.next = a;
        } else {
            node.next = b;
        }
        
        return dummy.next;
    }
};

