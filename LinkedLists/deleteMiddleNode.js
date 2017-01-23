const List = require('./List.js');
// Implement an algorithm to delete a node in the middle of the (i.e. any node 
// but the first and last node, not necesarily the exact middle) of a singly
// linked list, given only access to that node.

const deleteMiddleNode = (node) => {
  let prev = node;
  let curr = node.next;
  while(curr.next !== null) {
    prev.val = curr.val;
    prev = prev.next;
    curr = curr.next;
  };
  prev.val = curr.val;
  prev.next = null;
};

// Tests
const l = new List();
l.push('a');
l.push('b');
l.push('c');
l.push('d');
l.push('e');
l.push('f');

let count = 0;
let node = l.head;
while(count !== 3) {
  node = node.next;
  count++;
};

deleteMiddleNode(node);
console.log(''+l);