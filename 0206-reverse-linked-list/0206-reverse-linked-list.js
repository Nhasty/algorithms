/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev = null) {
  if (head === null) {
    return null;
  }
  const next = head.next;
  head.next = prev;
  if (next === null) {
    return head;
  }
  return reverseList(next, head)
};