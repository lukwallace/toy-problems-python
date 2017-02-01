// Implement a function to check if a binary tree is a binary search tree

const validate = (tree) => {
  let prev = -Infinity;
  let valid = true;
  //Inorder traversal
  const traverse = (node) => {
    if(node === null) {
      return;
    }

    traverse(node.left);
    console.log(node.val);
    if (prev > node.val) {
      valid = false;
    }
    prev = node.val;
    traverse(node.right);
  };

  traverse(tree);
  return valid;
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

const tree2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

console.log(validate(tree)); // false
console.log(validate(tree2)); // true