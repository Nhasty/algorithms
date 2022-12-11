// Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

// You may assume that the input tree is non-empty.

// bf iter

const bottomRightValue = (root) => {
  // todo
  // if root null return null
  if (root === null) return null;
  // queue
  const q = [ root ];
  // last visited
  let lastVisited = null
  // while q not empty
  while (q.length) {
    // visit next eitem in q
    lastVisited = q.shift();
    // add children to q if exists
    if (lastVisited.left !== null) {
      q.push(lastVisited.left);
    }
    if (lastVisited.right !== null) {
      q.push(lastVisited.right)
    }
  }
  // return last visited
  return lastVisited.val
}