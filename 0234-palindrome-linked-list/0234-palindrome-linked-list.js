/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let last = null
  while (slow !== null) {   
    let temp = slow.next;
    slow.next = last;
    last = slow;
    slow = temp
  }
  while (last !== null) {
    if (head.val !== last.val) {
      return false;
    } 
    head = head.next;
    last = last.next;
  }
  return true;
};