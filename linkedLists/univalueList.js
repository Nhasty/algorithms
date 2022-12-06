// Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

// You may assume that the input list is non-empty.

// iterative

const isUnivalueList = (head) => {
  // todo
  // current node
  let current = head;
  // while current not null
  while (current !== null) {
    // if current not equal to next
    if (current.val !== head.val) {
      return false;
    // else set current to next
    }
    current = current.next;
  }
  // return true
  return true;
};

// recursive

const isUnivalueList = (head, value) => {
  // todo
  if (head === null) return true;
  const target = value || head.val;
  if (head.val !== target) return false;
  return isUnivalueList(head.next, target);
};
