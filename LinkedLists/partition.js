const List = require('./List.js');

// Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the "right partition"; it does not need to be appear ebtween the left and right paritions.

// Example
// Input  (3) -> (5) -> (8) -> (5) -> (10) -> (2) -> (1) [partition=5]
// Output (3) -> (1) -> (2) -> (10) -> (5) -> (5) -> (8)

const partition = (list, value) => {
  let pocket = undefined;
  for(let curr = list.head; curr !== null; curr = curr.next) {
    if(pocket === undefined && curr.val >= value) {
      pocket = curr;
    }

    if(pocket === undefined) {
      continue;
    }

    if(curr.val < value) {
      const temp = curr.val;
      curr.val = pocket.val;
      pocket.val = temp;
      pocket = pocket.next;
    }
  }
};

const l = new List();
l.push(3);
l.push(5);
l.push(8);
l.push(5);
l.push(10);
l.push(2);
l.push(1);
console.log(''+l);
partition(l, 5);
console.log(''+l);

