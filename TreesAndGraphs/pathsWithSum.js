// Explore problem space. Test each conjecture
// ^ Simple solution first
// No premature optimization
// No Limit but Time yourself

// You are given a binanry tree whose values are integers and a target value. Find the number of paths from the one could take to count up to the target number. (You do not have to start at the root node)

// Example
// target: 8
// tree:
//       10
//    5,     4
//  3, 1,   2, 7
// 5,0,2,3,4,5,6,0 

// returns: 3 (5 -> 3, 5 -> 1 -> 2, 3 -> 5)

// My issue with this one: Reluctance to look at the brute force implementation. It seemed silly to do tree traversal down for every node. 

// Brute force: see above.
let pathsWithSum = (tree, target) => {
  let sum = 0;
  let res = 0;
  const OutterTraversal = (node) => {
    // base case -- bottom out go back up
    if(node === null) {
      return;
    }
    innerTraversal(node);
    OutterTraversal(node.left);
    OutterTraversal(node.right);
  };

  const innerTraversal = (node) => {
    if(node === null) {
      return;
    }
    sum += node.val;
    if(sum === target) {
      res++;
    }
    innerTraversal(node.left);
    innerTraversal(node.right);
    sum -= node.val;
  };

  OutterTraversal(tree);
  return res;
};

// Note to self, gotta build a tree building framework to make testing easy. 