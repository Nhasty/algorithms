// Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.

const linkedPalindrome = (head) => {
  // todo
  let current = head;
  const values = [];
  while (current !== null)  {
    values.push(current.val);
    current = current.next;
  }
  const reversed = [...values].reverse();
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversed[i]) {
      return false;
    }
  }
  return true;
};
