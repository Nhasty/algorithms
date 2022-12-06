// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// Hey. This is our first linked list problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

// Iterative

const linkedListValues = (head) => {
  // todo
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};

// recursive

const linkedListValues = (head) => {
  // todo
  if (head === null) return [];
  return [head.val, ...linkedListValues(head.next)];
};