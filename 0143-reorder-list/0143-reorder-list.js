/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tail = reverse(slow.next);
  slow.next = null;
  let current = head;
  while (tail !== null) {
    const placeholder = current.next;
    current.next = tail;
    tail = tail.next;
    current.next.next = placeholder;
    current = placeholder;
  }
};

const reverse = (head, prev = null) => {
  if (head === null) {
    return prev;
  }
  const placeholder = head.next;
  head.next = prev;
  return reverse(placeholder, head)
}