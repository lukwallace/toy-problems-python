// A magic index in an array A[0 ... n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A. FOLLOW UP: what is the values are not distinct?

let magicIndex = (arr, start=0, end=arr.length-1) => {
  const mid = ((start + end) / 2) | 0;
  // couldn't find it
  if(start > end) {
    return null;
  }
  // move left
  if(arr[mid] > mid) {
    return magicIndex(arr, start, mid-1);
  }
  // move right
  if (arr[mid] < mid) {
    return magicIndex(arr, mid+1, end);
  }
  //found it
  return mid;
};

// FOLLOW UP
magicIndex = (arr, start=0, end=arr.length-1) => {
  const mid = ((start + end ) / 2) | 0;
  if(start > end) {
    return null;
  }
  //found it
  if(mid === arr[mid]) {
    return mid;
  }

  const rightStart = Math.max(arr[mid], mid+1);
  const leftEnd = Math.min(arr[mid], mid-1);
  return magicIndex(arr, start, leftEnd) || magicIndex(arr, rightStart, end);
};

console.log(magicIndex([-40, -20, -3, 13, 14, 15])); // null
console.log(magicIndex([-40, -20, -3, 3, 14, 15])); // 3
console.log(magicIndex([-40, -20, -3, -1, 4, 15])); // 4
console.log(magicIndex([-40, -20, -3, 2, 3, 5])); // 5

console.log(magicIndex([-1, 1, 1, 14, 15, 16])); // 1
