// In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzle starts with disks sorted in ascending order of size from top to bottom (i.e. each disk sits on top of an even larger one). You have the following constraints.

// 1) Only one disk can be moved at a time
// 2) A disk is slid off the top of one tower onto another tower
// 3) A disk cannot be placed on top of a smaller disk.

// Write a program to move the disks from the first tower to the last using Stacks.
// Assuming arrays are stacks here. [bottom . . . top];

const assert = require('assert');
const TowersOfHanoi = (n) => {
  const first = [];
  const middle = [];
  const last = [];
  // Populate the towers
  for(let i = n; i > 0; i--) {
    first.push(i);
  }

  const move = (curr, buffer, dest, count) => {
    // console.log('first', first);
    // console.log('middle', middle);
    // console.log('last', last);
    console.log('Moving ' + count + ' from ' + curr.toString() + ' to ' + dest.toString());
    assert(curr.length >= count);
    if(count === 0) {
      return;
    }

    if(count === 1) {
      dest.push(curr.pop());
      return;
    }

    if(count === 2) {
      buffer.push(curr.pop());
      dest.push(curr.pop());
      dest.push(buffer.pop());
      return;
    }

    move(curr, dest, buffer, count - 1);
    move(curr, buffer, dest, 1);
    move(buffer, curr, dest, count - 1);
  };
  move(first, middle, last, n);
  console.log('All moved?', last);
};

TowersOfHanoi(5);