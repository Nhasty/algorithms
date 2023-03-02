/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let first = head;
  let last = head;
  let count = 0;
  while (last !== null) {
    if (count > n) {
      first = first.next;
    }
    last = last.next;
    count += 1;
  }
  if (count === n) {
    return head.next;
  }
  first.next = first.next.next;
  return head;
};