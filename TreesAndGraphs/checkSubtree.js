// T1 and T2 are two very large binary trees with T1 much bigger than T2. Create an algorithm to determin if T2 is a subtree of T1. A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.

// Review:
// // ALWAYS ALWAYS ALWAYS NO MATTER WHAT: Start simple solution first -- must flesh out before anything else
// // Please please please stop attempts at premature optimization.

// simple solution: use preorder traversal to check for similarities
let checkSubtree = (big, small) => {
  let bigStr = [];
  let smallStr = [];
  const traverse = (node, str) => {
    if(node === null) {
      str.push('null');
      return;
    }
    str.push(node.val);
    traverse(node.left, str);
    traverse(node.right, str);
  };

  traverse(big, bigStr);
  traverse(small, smallStr);
  console.log(bigStr.join(), smallStr.join());
  return bigStr.join().indexOf(smallStr.join()) !== -1;
};

checkSubtree = (big, small) => {
  if(small === null) {
    return true;
  }

  const traverse = (node) => {
    if(node === null) {
      return false;
    }
    if(node.val === small.val) {
      return checkTrees(node, small);
    }
    return traverse(node.left) || traverse(node.right);
  };

  return traverse(big);

};

const checkTrees = (one, two) => {
  if(one === null && two === null) {
    return true;
  }

  if(one === null || two === null) {
    return false;
  }

  if(one.val === two.val) {
    return checkTrees(one.left, two.left) && checkTrees(one.right, two.right);
  }

  return false;
};

let small = { val: 2, left: null, right: null };
let big = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };

console.log(checkSubtree(small, big));