// Write an algorithm to find the next node in an in-order traversal given a node in the binary tree. Assume each node has a link to it's parent.

const successor = (node) => {
  // If it has a right side 
  // we must be traversing to the far left of the right
  if(node.right !== null) {
    let iter = node.right;
    while(iter.left !== null) {
      iter = iter.left;
    }
    return iter;
  }

  // Discern whether or not its a left or right node
  let parent = node.parent;
  while(parent !== null) {
    if(parent.left === node) {
      return parent;
    }
    // Otherwise it's the right node
    node = parent;
    parent = node.parent;
  }
  return parent;
};

let one = {};
let two = {};
let three = {};
let four = {};
let five = {};
let six = {};
let seven = {};

one.val = 1;
one.left = two;
one.right = three;
one.parent = null;

two.val = 2;
two.left = four;
two.right = five;
two.parent = one;

three.val = 3;
three.left = six;
three.right = seven;
three.parent = one;

four.val = 4;
four.left = null;
four.right = null;
four.parent = two;

five.val = 5;
five.left = null;
five.right = null;
five.parent = two;

six.val = 6;
six.left = null;
six.right = null;
six.parent = three;

seven.val = 7;
seven.left = null;
seven.right = null;
seven.parent = three;



console.log(successor(two));
console.log(successor(seven));
console.log(successor(six));
console.log(successor(five));



