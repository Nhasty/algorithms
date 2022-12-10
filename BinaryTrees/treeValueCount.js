// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.


// BF iter

const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;
  let count = 0;
  const q = [ root ];
  while (q.length) {
    const visiting = q.shift();
    if ( visiting.val === target) {
      count += 1;
    }
    if (visiting.left !== null) {
      q.push(visiting.left)
    }
    if (visiting.right !== null) {
      q.push(visiting.right)
    }
  }
  return count;
};

// DF recursive

const treeValueCount = (root, target) => {
  //todo
  if (root = null) {
    return count
  }
  const match = root.val === target ? 1 : 0;
  return currCount + treeValueCount(root.left, target, currCount) +  treeValueCount(root.right, target, currCount)
}