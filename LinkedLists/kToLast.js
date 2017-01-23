const List = require('./List.js');
// Implement an algorithm to find the kth to the last element of a singly linked list

const kToLast = (list, k) => {
  let curr = list.head;
  let res = undefined;
  let count = 0;
  while(curr !== null) {
    console.log(res === undefined ? 'none' : res.val);
    count++;
    if(count === k) {
      res = list.head;
    }
    if(count > k) {
      res = res.next;
    }
    curr = curr.next;
  };
  return res;
};

// Tests
const l = new List();
l.push('a');
l.push('b');
l.push('c');
l.push('d');
l.push('e');
l.push('f');
console.log(kToLast(l, 4));