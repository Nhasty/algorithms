// Write a function, breadthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

// iterative

const breadthFirstValues = (root) => {
  // todo
  // if root null return empty array
  if (root === null) return [];
  // initialize q w/ root
  const q = [ root ];
  // storage
  const values = [];
  // while q not empty
  while (q.length) {
    // shift q
    const visiting = q.shift();
    // add val to storage
    values.push(visiting.val);
    // add left and right if exist
    if (visiting.left !== null) {
      q.push(visiting.left);
    }
    if (visiting.right !== null) {
      q.push(visiting.right);
    }
  }
  return values;
};
