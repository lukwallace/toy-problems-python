/*
Problem:
Imagine you are reading in a stream of integers. Periodically, you wish to be able to look up the rank of a number x (the number of values less than or equal to x). Implement the data strctures and algoirthms to support these operations. That is, implement the method track(int x), which is called when each number is generated, and the method getRankOfNumber(int x) which returns the number of values less than or equal to x (not including x itself).

Example: 
Stream [5, 1, 4, 4, 5, 9, 7, 13, 3]
getRankOfNumber(1) = 0;
getRankOfNumber(3) = 1;
getRankOfNumber(4) = 3;

Thoughts:
Starting with storage, we're looking to store the numbers in such a way that both storage and rank checking is easy. Question then is: What is the best form of storage?
List in order of appearance: track becomes O(1), getRank O(n)
Sorted List: track O(n), getRank O(logn) -- if it's sorted we can do a binary search on it. (somehow wasn't obvious at first)
Hashtable: track becomes O(1), getRank O(k) where k is the number of unique elements
Binary Search Tree: track O(logn), getRank O(logn)?

*/

/* This tree does not balance itself */
/* Also important less than or equal is stored in the left branch */
let tree = null;
const track = (num) => {
  const node = {
    val: num,
    left: null,
    right: null,
    leftCount: 0
  };

  if(tree === null) {
    tree = node;
    return;
  }

  let curr = tree;
  while(curr !== null) {
    prev = curr;
    if(num > curr.val) {
      curr = curr.right;
    } else {
      curr.leftCount++;
      curr = curr.left;
    }
  }

  if(num > prev.val) {
    prev.right = node;
  } else {
    prev.left = node;
  }
};

const getRankOfNumber = (num) => {
  /* Find the number counting as we go */
  let curr = tree;
  let rank = 0;
  while(curr !== null && curr.val !== num) {
    if(num > curr.val) {
      rank += curr.leftCount + 1;
      curr = curr.right;
    } else {
      curr = curr.left;
    }
  }
  if(curr.val === num) {
    rank += curr.leftCount;
    return rank;
  }
  return null;
};

track(5);
track(1);
track(4);
track(4);
track(5);
track(9);
track(7);
track(13);
track(3);
console.log(getRankOfNumber(1)); // 0;
console.log(getRankOfNumber(3)); // 1;
console.log(getRankOfNumber(4)); // 3;
