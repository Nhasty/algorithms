// Write a function, addLists, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

// iterative

const addLists = (head1, head2) => {
  // todo
  // dummy head = null
  const dummyHead = new Node(null);
  // tail = dummy head
  let tail = dummyHead
  // current 1 and 2
  let curr1 = head1;
  let curr2 = head2
  // remainder zero
  let remain = 0;
  // while current 1 and 2 are null
  while (curr1 !== null && curr2 !== null) {
    // catch sum of vals + remainder
    let sum = curr1.val + curr2.val + remain;
    // set remainder to zero
    remain = 0;
    // if sum > 9
    if (sum > 9) {
      // grab ones digit and store in sum
      sum = sum % 10;
      // set remainder to 1
      remain = 1;
    }
    // tail.next = make new node from sum
    tail.next = new Node(sum);
    // tail = tail.next
    tail = tail.next;
    // increment current 1 and 2
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  // while remainder
  while (remain) {
    // value = 0
    let value = 0;
    // if current 1 not null
    if (curr1 !== null) {
      // value = current 1 val
      // increment current 1
      value = curr1.val;
      curr1 = curr1.next;
    }
    // if current 2 not null
      // value = current 2 val
      // increment current 2
    if (curr2 !== null) {
      value = curr2.val;
      curr2 = curr2.next;
    }
    // sum  remainder and value
    let remainSum = value + remain;
    // if sum greater than 9 set grab ones digit
    if (remainSum > 9) {
      remainSum = remainSum % 10;
    } else {
      remain = 0;
    }
    // tail.next = create new node with sum
    tail.next = new Node(remainSum);
    // tail = tail.next
    tail = tail.next;
  }
  // if current 1 not null
  if (curr1 !== null) {
    tail.next = curr1
  }
  if (curr2 !== null) {
    tail.next = curr2
  }
  return dummyHead.next
    //tail.next = current 1
  // if current 2 not null
    // tail.next = current 2
  // return dummyhead.next
};

// recursive

const addLists = (head1, head2, remain = 0) => {
  //todo
  if (head1 === null && head2 === null && remain === 0) {
    return null
  }
  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;
  let sum = val1 + val2 + remain;
  let newRemain = sum > 9 ? 1 : 0;
  let digit = sum % 10;
  const result = new Node (digit);
  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;
  result.next = addLists(next1, next2, newRemain);
  return result
}