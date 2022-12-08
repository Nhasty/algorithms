// Write a function, createLinkedList, that takes in an array of values as an argument. The function should create a linked list containing each element of the array as the values of the nodes. The function should return the head of the linked list.

// iterative

const createLinkedList = (values) => {
  // todo
  const dummyHead = new Node(null);
  let tail = dummyHead;
  values.forEach((value) => {
    tail.next = new Node(value);
    tail = tail.next;
  })
  return dummyHead.next
};

// recursive

const createLinkedList = (values, i = 0) => {
  // todo
  if (i === values.length) return null;

  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};