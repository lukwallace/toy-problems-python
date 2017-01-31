const List = require('../LinkedLists/List.js');
// Given a binary tree design an algorithm which creates a
// linked list of all the nodes at each depth 

// Binary Tree:: {
//  val: value
//  left: Object
//  right: Object
// }

// List Node:: {
//   val: value
//   next: Object
// }

// Special constraints: No build systems -- charish each line of code you write
// Traversal counting depths

const listOfDepths = (tree) => {
  const list = [];
  let depth = 0;
  const traverse = (node, depth) => {
    if(node === null) {
      return;
    }

    list[depth] = list[depth] === undefined? new List() : list[depth];
    list[depth].push(node.val);
    traverse(node.left, depth+1);
    traverse(node.right, depth+1);
  };
  traverse(tree, depth);
  return list;
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

listOfDepths(tree).forEach((depthList) => { console.log(''+depthList)});