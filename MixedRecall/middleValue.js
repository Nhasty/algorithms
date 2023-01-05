// Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node.

// You may assume that the input list is non-empty.

const middleValue = (head) => {
  // todo
  let fast = head;
  let slow = head;
  while (fast !== null || fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.val;
};