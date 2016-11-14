/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slow = head,
        fast = head;
    /** 设定两个指针，Slow 指针一次走一步， Fast 指针一次走两步。
     *  如果两个指针相遇，那么返回 True，表示链表上有环儿，否则没有
     */
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast || (fast && fast.next === slow)) {
            return true;
        }
    }
    return false;
};