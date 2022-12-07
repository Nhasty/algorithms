// Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

// iterative

const longestStreak = (head) => {
  // todo
  let current = head
  let prevVal = null
  let count = 0;
  let maxCount = 0;
  while (head !== null) {
    if (current.val === prevVal) {
      count += 1;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count
    }
    prevVal = current.val;
    current = current.next;
  }
  return maxCount;
};

// recursive

const longestStreak = (head) => {
  // todo
};