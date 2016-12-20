1 -> 2 -> 3 -> 1 -> 4 -> 1 -> 2......
s ------------------------
f ------------------------
     s -------------------
          f --------------
          s --------------
                    f ----
               s ---------
     f -------------------
                    s-----
               f----------
s ------------------------
f ------------------------                              
/*Q1: Check whether a linkedlist has cycle(LC141)*/

 var checkLinkedlistCycle = function(head) {
 	if(head === null) return false;
 	var slow = head;
 	var fast = head;
 	while(fast !== null && fast.next !== null) {
 		slow = slow.next;
 		fast = fast.next.next;
 		if(slow === fast || fast && fast.next === slow) return true;
 	}
 	return false;
}

/*Q2: Intersection of LinkedList(LC160)*/

var getIntersectionNode = function(headA, headB) {
    var nodeA = headA;
    var nodeB = headB;
    
    while(nodeA !== nodeB) {
        nodeA = (nodeA === null) ? headB : nodeA.next;
        nodeB = (nodeB === null) ? headA : nodeB.next;
    }
    
    return nodeA;
};

/*Q3: Return enter node of cycle(LC142)*/

var detectCycle = function(head) {
    if(head === null) return head;
    var slow = head;
    var fast = head;
    var flag = false;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) {
            flag = true;
            break;
        }
    }
    
    if(flag) {
        fast = head;
        while(fast !== slow) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    } else {
        return null;
    }
};