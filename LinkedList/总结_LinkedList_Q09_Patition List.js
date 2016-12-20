/*Solution 1*/

var partition = function(head, x) {
    if(head === null || head.next === null) return head;
    
    var small = new ListNode(0);
    var big   = new ListNode(0);
    var curSmall = small;
    var curBig   = big;
    
    while(head !== null) {
        if(head.val < x) {
            curSmall.next = head;
            curSmall = curSmall.next;
        } else {
            curBig.next = head;
            curBig = curBig.next;
        }
        head = head.next;
    }
    curSmall.next = big.next;
    curBig.next = null;
    return small.next;
};

/*Solution 2*/ 
 ====>   x = 3;
         head
 ====>    1   --->   4   --->   3   --->   2   --->   5   --->   2   --->   null
  org    cur      cur.next
  1st               next
                    null
       preHead
       preTail  preTail.next
                    cur      cur.next
  2nd                          next
                               null
                 afterHead
                 afterTail  afterTail.next
                                cur      cur.next
  3rd                                      next
                                           null
                            afterTail.next
                              afterTail
                                           cur      cur.next
  4th                                                 next
                                                      null
                                        preTail.next
                                           preTail
                                                      cur      cur.next
  5th                                                            next
                                                                 null
                                                  afterTail.next
                                                     afterTail
                                                                 cur      cur.next
  6th                                                                       next
                                                                            null
                                                             preTail.next
                                                                preTail preTail.next
                                                                            cur
  7th                                                                     afterHead

    head/preHead             preTail    afterHead
  ===>   1   --->   2   --->    2   --->    4    --->    3   --->   5    
              
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var cur = head;
    var next, smallHead, smallTail, bigHead, bigTail;
    
    if(head === null) return head;
    
    while(cur) {
        next = cur.next;
        cur.next = null;
        
        if(cur.val < x) {
            if(!smallHead) {
                smallHead = cur;
                smallTail = cur;
            } else {
                smallTail.next = cur;
                smallTail = cur;
            }
        } else {
            if(!bigHead) {
                bigHead = cur;
                bigTail = cur;
            } else {
                bigTail.next = cur;
                bigTail = cur;
            }
        }
        cur = next;
    }
    
    if(smallTail) {
        smallTail.next = bigHead;
        return smallHead;
    } else {
        return bigHead;
    }
};