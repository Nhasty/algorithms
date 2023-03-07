/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const dummyHead = new ListNode();
  let current = dummyHead;
  const q = [];
  for (let head of lists) {
    priorityInsert(q, head)
  }
  while (q.length) {
    current.next = q.shift();
    current = current.next;
    priorityInsert(q, current.next);
  }
  return dummyHead.next;
};

const priorityInsert = (q, node, start = 0, stop = q.length - 1) => {
  if (node === null) {
    return;
  }
  if (!q.length) {
    q.push(node);
    return
  }
  if (start === stop) {
    if (node.val >= q[start].val) {
      q.splice(start + 1, 0, node);
    } else {
       q.splice(start, 0, node);
    }
    return;
  }
  let midpoint = Math.floor((start + stop) / 2);
  if (node.val <= q[midpoint].val) {
    priorityInsert(q, node, start, midpoint)
  } else {
    priorityInsert(q, node, midpoint + 1, stop);
  }  
}