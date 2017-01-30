// Given a sorted increasing array with unique integer elements, write an algorithm to create a binary search tree with minimal height

// Special constraints: No build system, run it when deemed finished.
// Solution - use recursion to select the middle of sequence and recurse the left and right half

// Binary Tree:: {
//  val: value
//  left: Object
//  right: Object
// }

const minimalTree = (arr, start, stop) => {
  start = start === undefined? 0 : start;
  stop = stop === undefined? arr.length-1 : stop;
  
  // base case
  if(start === stop) {
    return { val: arr[start] };
  }

  if(start > stop) {
    return null;
  }

  let mid = Math.floor((start+stop)/2);

  const node = { val: arr[mid] };
  node.left = minimalTree(arr, start, mid-1);
  node.right = minimalTree(arr, mid+1, stop);
  return node;
};

// Test Helper
// Breadth first traversal of tree printing
const printTree = (rootNode) => {
  const queue = [rootNode];
  let res = '';
  while(queue.length !== 0) {
    let node = queue.shift();
    res += node.val;
    if(node.val === 'null') {
      continue;
    }
    if(node.left) {
      queue.push(node.left);
    } else {
      queue.push({val: 'null'});
    }
    if(node.right) {
      queue.push(node.right);
    } else {
      queue.push({val: 'null'});
    }

  }
  console.log(res);
};

const tree = { 
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    }, 
    right: {
      val: 5,
      left: null,
      right: null
    } 
  }, 
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

// printTree(tree);
printTree(minimalTree([0, 1, 2, 3, 4, 5 ,6, 7, 8, 9]));
