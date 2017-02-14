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
  let cache = [];
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
    cache.push(node.val);
    if(sum === target) {
      console.log(cache);
      res++;
    }
    innerTraversal(node.left);
    innerTraversal(node.right);
    sum -= node.val;
    cache.pop(node.val);
  };

  OutterTraversal(tree);
  return res;
};

// Helper function, got too lazy to build trees manually, also better for extensive testing
const makeTree = (arr) => {
  if(arr.length === 0) {
    return null;
  }

  let rootNode = { val: arr[0], left: null, right: null };
  let currIndex = 0;
  let temp = undefined;

  const workQueue = [rootNode];
  while(workQueue.length > 0) {
    temp = workQueue.shift();
    currIndex++;
    if(arr[currIndex] !== undefined) {
      const left = { val: arr[currIndex], left: null, right: null };
      temp.left = left;
      workQueue.push(left);
    }

    currIndex++;
    if(arr[currIndex] !== undefined) {
      const right = { val: arr[currIndex], left: null, right: null };
      temp.right = right;
      workQueue.push(right);
    }
  }
  return rootNode;
};

const tree = makeTree([10,5,4,3,1,2,7,5,0,2,3,4,5,6,0]);
console.log(pathsWithSum(tree, 8));

// A better implementation would could have an object store the value of the running sum. I.e. at each node, make an entry in the object indicating that can reach this sum. Uses only a single traversal from the root node. To get the paths that sum up to the target that does not start from the root, we can subtract the target value from the current running sum and see if we can reach that partial sum by looking it up in our object. Example: Object { '10': 1, '15': 1, '18': 1 } with RunningSum: 18. Calculate 18 - 8 = 10. Can we reach 10? Yes - Object['10'] is 1 so we can get to 10 by one path.


