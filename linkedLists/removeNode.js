// Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

// Do this in-place.

// You may assume that the input list is non-empty.

// You may assume that the input list contains the target.

// iterative

const removeNode = (head, targetVal) => {
  // todo
  // prev start at null
  let prev = null;
  // current
  let current = head;
  // while current not null
  while (current !== null) {
    // if current val = target
    if (current.val === targetVal) {
      // if prev is null
      if (prev === null) return current.next;
        // return head.next
        return head.next;
      // prev.next = current.next
      prev.next = current.next;
      return head;
    }
    prev = current
    current = current.next;
  }
  return head;
};

// recursive

const removeNode = (head, targetVal) => {
  //todo
  if (head.val === targetVal) {
    return head.next;
  }
  if (head === null) return null;
  head.next = removeNode(head.next, targetVal);
  return head;
}