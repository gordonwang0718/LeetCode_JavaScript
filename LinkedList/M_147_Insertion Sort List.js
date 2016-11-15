        h
        5  -->  3  -->  6  -->  4
pre    cur ----------------------
//
        h
        5  -->  3  -->  6  -->  4
pre    cur ----------------------
               next -------------
       pre   cur.next ----------
               cur --------------
                |
                3
//
        h
        5  -->  3  -->  6  -->  4
pre    cur ----------------------
               next -------------
       pre   cur.next -----------
               cur --------------
                |
                3
                       next -----
    cur.next prev.next  cur -----
                         |
                         6
//
        h
        5  -->  3  -->  6  -->  4
pre    cur ----------------------
               next -------------
       pre   cur.next -----------
               cur --------------
                |
                3
                       next -----
    cur.next prev.next  cur -----
                         |
                         6
                               next
                     prev.next  pre   cur.next
                                cur
                                 |
                                 4
//
        h
        5  -->  3  -->  6  -->  4
pre    cur ----------------------
               next -------------
       pre   cur.next -----------
               cur --------------
                |
                3
                       next -----
    cur.next prev.next  cur -----
                         |
                         6
                               next
                     prev.next  pre   cur.next
                                cur
                                 |
                                 4
                                        next                              







/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    var sortedListHead = new ListNode(0),
        pre = sortedList,
        cur = head,
        next;
        
    while(cur !== null) {
        next = cur.next;
        pre = sortedList;
        
        while (pre.next && pre.next.val <= cur.val) {
            pre = pre.next;
        }
        
        cur.next = pre.next;
        pre.next = cur;
        cur = next;
    }
    
    return sortedList.next;
};