/* You are given two sorted arrays A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order

Goals:
Keep brisk pace, -- problem: 2 hours wasted HOW TO FIXX
Don't rely on IDE too much
Write your code first
Discuess tradeoffs and runtime

 */

/* This is just a portion of merge sort but with a few add-ons */
let sortedMerge = (A, B) => {
  const res = [];

  while(A.length !== 0 || B.length !== 0) {
    if(A[0] === B[0]) {
      res.push(A.shift());
      res.push(B.shift());
    }

    const smaller = A[0] > B[0] ? B : A;
    const larger = A[0] > B[0] ? A : B;
    while(smaller[0] < larger[0] && smaller.length !== 0) {
      res.push(smaller.shift());
    }
    res.push(larger.shift());
  }

  return res.concat(A).concat(B);
};

/* To merge B into A -- i.e. mutate A and B instead of returning a new array */
sortedMerge = (A, B) => {
  let indexA = A.length - 1;
  let indexB = B.length - 1;
  let currIndex = A.length + B.length - 1;

  while(currIndex >= 0) {
    /* Pull from A when B has no more, or index of A is greater than B */
    if(A[indexA] >= B[indexB] || indexB < 0) {
      A[currIndex] = A[indexA];
      indexA--;
    } else if(A[indexA] < B[indexB] || indexA < 0) {
      A[currIndex] = B[indexB];
      indexB--;
    }

    currIndex--;
  }
  return A;
};

console.log(sortedMerge([1, 3, 4, 5], [0, 2, 4, 6]));