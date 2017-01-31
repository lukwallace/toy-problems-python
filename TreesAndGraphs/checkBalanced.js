// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two substrees if any node never differ by more than one

// Solution: post order traversal to check height
const isBalanced = (tree) => {
  let balanced = true;
  const height = (node) => {
    //base case:
    const leftHeight = (node.left === null) ? 0 : 1 + height(node.left);
    const rightHeight = (node.right === null) ? 0 : 1 + height(node.right);

    if(node.val === 1) {
      console.log('left tree', node.left.val);
      console.log(leftHeight);
    }

    if(Math.abs(leftHeight - rightHeight) > 1) {
      console.log(node, leftHeight, rightHeight);
      balanced = false;
    }
    res = Math.max(leftHeight, rightHeight);

    if(node.val === 2) {
      // console.log(res);
    }

    return res;
  };
  height(tree);
  return balanced;
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

console.log(isBalanced(tree));