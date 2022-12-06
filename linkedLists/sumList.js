// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

// iterative

const sumList = (head) => {
  // todo
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

// recursive

const sumList = (head) => {
  // todo
  if (head === null) return 0;
  return head.val + sumList(head.next);
};