const List = require('./List.js');
// Given two (singly) linked lists, determine if the two lists intersect. Return the intescting node.
// Start time: 3:11 PM

//Brute force
const intersection = (l1, l2) => {
  let iter1 = l1.head;
  while(iter1 !== null) {
    let iter2 = l2.head;
    while(iter2 !== null) {
      if(iter1 === iter2) {
        return iter1;
      }
      iter2 = iter2.next;
    }
    iter1 = iter1.next;
  }
  return undefined;
};

// linear?
const intersectionLinear = (l1, l2) => {
  let iter1 = l1.head;
  const stack1 = [];
  while(iter1 !== null) {
    stack1.unshift(iter1);
    iter1 = iter1.next;
  }

  let iter2 = l2.head;
  const stack2 = [];
  while(iter2 !== null) {
    stack2.unshift(iter2);
    iter2 = iter2.next;
  }

  let found = false;
  let prev = undefined;
  while(stack1.length > 0 && stack2.length >0) {
    let fromOne = stack1.shift();
    let fromTwo = stack2.shift();
    console.log(fromOne, fromTwo);
    if(fromOne !== fromTwo) {
      return prev;
    }
    prev = fromOne;
  }
  return prev;
};

// Tests
const l1 = new List();
l1.push(1);
l1.push(2);
l1.push(3);
l1.push(2);
l1.push(1);
let curr = l1.head;
let count = 0;
while(count != 3) {
  curr = curr.next;
  count ++;
}
const temp = {val: 5, next: curr};
const l2 = new List();
l2.head = temp;

// console.log(''+l1);
// console.log(''+l2);

console.log(intersectionLinear(l1, l2));


