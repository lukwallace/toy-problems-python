// A binary search tree was created by traversing through an array from left to right and inserting each elelment. Give a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

// Proposed solution: traverse tree, create a list depths where a reference to each depth gives back a list of nodes in that depth. Generate output using permutations of permutations of that list of list of nodes.

// Recursive solution: weave together the left and right sides and prepend the node value to each permutation.

// Same thing? -- one is iterative, the other recursive.

// Goals: 
  // No BS (build systems). 
  // "Explain like I am five".

// Recursive:
const BSTsequences = (tree) => {
  // base case -- all possible BST sequences on an empty tree is the empty set
  if(tree === null) {
    return [[]];
  }

  // All possible sequences from left
  const left = BSTsequences(tree.left);
  // All possible sequences from right
  const right = BSTsequences(tree.right);

  let sequences = [];
  left.forEach((leftSeq) => {
    right.forEach((rightSeq) => {
      // Weave together a left and right sequence, and prepend a value
      const seqSet = weaveSet(leftSeq, rightSeq).map(seq => [tree.val].concat(seq));
      sequences = sequences.concat(seqSet);
    });
  });
  return sequences;
};

// Takes left and right sequence -- i.e. two arrays, returns all permutations of the two
// where elements from each are kept in relative order
const weaveSet = (left, right) => {
  const results = [];
  // const max = left.length + right.length;
  const weave = (left, right, pocket) => {
    pocket = pocket || [];
    if(left.length === 0 || right.length === 0) {
      results.push(pocket.concat(left).concat(right));
      return;
    }

    // remove from left
    const leftDup = left.slice();
    const temp1 = leftDup.shift();
    weave(leftDup, right, pocket.concat([temp1]));
    // remove from right
    const rightDup = right.slice();
    const temp2 = rightDup.shift();
    weave(left, rightDup, pocket.concat([temp2]));
  };
  weave(left, right);
  return results
};

// Tests
let tree = { val: 2, left: null, right: null };
tree = { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } };
tree = { 
  val: 2,
  left: {
    val: 0,
    left: {
      val: -1 ,
      left: null,
      right: null
    },
    right: {
      val: 1,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
};
console.log(BSTsequences(tree));