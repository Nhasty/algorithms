// Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

// Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ

// iterative

const depthFirstValues = (root) => {
  // todo
  // initialize stack
  if (root === null) return [];
  const stack = [ root ];
  // storage
  const values = [];
  // while stack not empty
  while (stack.length) {
    const visiting = stack.pop();
    values.push(visiting.val);
    if (visiting.right !== null) {
      stack.push(visiting.right);
    }
    if (visiting.left !== null) {
      stack.push(visiting.left);
    }
  }
  return values;
    // pop stack
    // add value to storage
    //add right and left if they exist
};

// recursive

const depthFirstValues = (root) => {
  // todo
  if (root === null) {
    return [];
  }
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
  // add root val to array
  // if root left exists
    // push call self on root.left
  // if root right exists
    // push call self on root.right
  // return array
};