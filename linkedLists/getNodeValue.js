// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.


// iterative

const getNodeValue = (head, index) => {
  // todo
  let currentIndex = 0;
  let current = head
  while (current !== null) {
    if (currentIndex === index) return current.val
    current = current.next;
    currentIndex += 1;
  }
  return null;
};

// recursive

const getNodeValue = (head, index) => {
  // todo
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};