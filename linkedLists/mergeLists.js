// Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty and contain increasing sorted numbers.

// iterative

const mergeLists = (head1, head2) => {
  // todo
  // current item in list 1
  let current1 = head1;
  // current item in list 2
  let current2 = head2;
  // prev1 & prev 2
  let prev1 = null;
  let prev2 = null;
  // head = least val
  let head = head1.val < head2.val ? head1 : head2;
  // while both not null
  while (current1 !== null && current2 !== null) {
    // if cur1 < cur2
    if (current1.val <= current2.val) {
      // if prev2 not null
      if (prev2 !== null) {
        prev2.next = current1;
        prev2 = null;
      }
      prev1 = current1;
      current1 = current1.next;
        // set prev2 next to cur1
        // reset prev2 to null
      // store cur 1 as prev1
      // increment cur1
    }
    if (current1 === null || current2.val < current1.val) {
      if (prev1 !== null) {
        prev1.next = current2;
        prev1 = null;
      }
      prev2 = current2;
      current2 = current2.next;
    }

    // if cur2 value < cur1 value or cur1 is null
      // if prev1 not null
        // set prev1 next to curr 2
        // reset prev1 to null
      // store cur2 as prev2
      // increment curr2
  }
  // if prev 2 not null and cur1 not null
  if (prev2 !== null and current1 !== null) {
    prev2.next = current1;
  }
    //set prev2 to cur1
  return head;
};

// recursive

const mergeLists = (head1, head2) => {
  // todo
  // base case head1 or head2 null return
  if (head1 === null) {
    return head2;
  } else if (head2 === null) {
    return head1;
  }
  // if head1 < head2
  if (head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeLists(next1, head2);
    return head1
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2
  }
};