// Design an algorithm and write code to find the first common ancester of two nodes in a binary tree, Avoid storing additional nodes in a data structure. (This is not necessarily a binary search tree).

// Notes: Explore problem space more; No BS (build systems).

// Proposed solution: A depth first traversal counting the nodes on both sides 
// Assuming no link back to parent node.
const firstCommonAncester = (one, two, tree) => {
  let fca = tree;
  const traverse = (node) => {
    // base case -- bottom out
    if(node === null) {
      return 0;
    }

    // if we found one of the nodes count it
    if(node === one || node === two) {
      return 1;
    }

    // check counts of both ends
    const left = traverse(node.left);
    const right = traverse(node.right);
    if(left === 1 && right === 1) {
      fca = node;
    }
    return left + right;
  };
  traverse(tree);
  return fca;
};

const one = { left: { left: null, right: null }, right: { left: null, right: null } };
const two = { left: null, right: null };
const tree = {
  val: 'There is only one!',
  left: one,
  right: { left: { left: null, right: null }, right: two }
};

console.log(firstCommonAncester(one, two, tree).val);