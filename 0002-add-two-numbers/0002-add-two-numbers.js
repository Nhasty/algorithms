/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, remainder = 0) {
  debugger
  if (l1 === null && l2 === null) {
    return remainder ? new ListNode(1): null;
  }
  const val1 = l1 !== null ? l1.val : 0;
  const val2 = l2 !== null ? l2.val : 0;
  let sum = val1 + val2 + remainder;
  remainder = 0;
  if (sum > 9) {
    sum -= 10;
    remainder = 1;
  }
  if (l1 === null) {
    return remainder ? new ListNode(sum, addTwoNumbers(null, l2.next, remainder)) : new ListNode(sum, l2.next);
  }
  if (l2 === null) {
    return remainder ? new ListNode(sum, addTwoNumbers(l1.next, null, remainder)) : new ListNode(sum, l1.next);
  }
  return new ListNode(sum, addTwoNumbers(l1.next, l2.next, remainder));
};