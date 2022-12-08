//Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

// Do this in-place.

// You may assume that the input list is non-empty and the index is not greater than the length of the input list.

// iterative

const insertNode = (head, value, index) => {
  //todo
  newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  console..log('here')
  let current = head;
  let currentIndex = 0;
  while (current !== null) {
    if (currentIndex === index -1) {
      const next = current.next;
      current.next = newNode;
      newNode.next = next
      break;
    }
    current = current.next;
    currentIndex += 1;
  }
  return head;
}

// recursive

const insertNode = (head, value, index, currentIndex = 0) => {
  //todo
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  if (currentIndex === index - 1) {
    const next = head.next
    head.next = new Node(value);
    head.next.next = next;
    return heade
  }
  insertNode(head.next, value, index, currentIndex + 1);
  return head;
}