// Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

//iterative

const reverseList = (head) => {
  // todo
  // current node
  let current = head;
  // previous node is null
  let prev = null;
  // while current node not null
  while (current !== null) {
    // next node
    const next = current.next;
    // current.next = previous
    current.next = prev;
    // previous = current
    prev = current;
    // current = next
    current = next;
  }
  // return previous
  return prev
};

// recursive

const reverseList = (head, prev = null) => {
  // todo
  const next = head.next;
  head.next = prev
  if (next === null) return head;
  return reverseList(next, head);
};