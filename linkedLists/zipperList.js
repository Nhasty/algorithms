// Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// iterative

const zipperLists = (head1, head2) => {
  // todo
  let current1 = head1;
  let current2 = head2;
  while (current1 !== null && current2 !== null) {
    const next1 = current1.next;
    const next2 = current2.next;
    current1.next = current2;
    next1 !== null ? current2.next = next1 : null;
    current1 = next1;
    current2 = next2;
  }
  return head1;
};

// recursive

const zipperLists = (head1, head2) => {
  // todo
  if (head1 === null || head2 === null) return;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  next1 !== null ? head2.next = next1 : null;
  zipperLists(next1, next2);
  return head1;
};