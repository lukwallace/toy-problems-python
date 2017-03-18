/* 
You are given an array-like data structure Listy which lacks a size method. It does, however, have an elementAt(i) method that returns the element at index i in O(1) time. If i is beynd the bounds of the data structure,  it returns -1. (For this reason the data structure only supports positive integers.) Given a Listy which contains sorted, positive integers, find the index at which an element x occurs. If x occurs multiple times, you may return any index.

Assumptions: 
solution should be better than O(n) since the basic search is linear - uninteresting
solution should be best case O(logn) since that is the runtime for a sorted search when you know size

*/

/*
First solution:
Go to index x, search (0 to x) or (x to 2x) or (2x to 3x) and onwards?
Does alright when theres not a lot of duplicates, but not by a lot. 
This one becomes inefficient when there is a lot of duplicates - e.g. [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3] 3
*/


/*Turns out we can find an approximate size in O(logn) time which means our solution remains O(logn) even without size*/
const search = (listy, target) => {
  if(listy[0] === undefined) {
    return null;
  }
  let curr = 1;
  while(listy[curr] !== undefined) {
    curr *= 2;
  }

  return binarySearch(listy, target, 0, curr);
};

const binarySearch = (listy, target, left, right) => {
  const mid = Math.floor((left + right)/2);
  const midVal = listy[mid];
  if(left > right) {
    return null;
  }

  if(midVal === target) {
    return mid;
  }

  if(midVal === undefined || target < midVal) {
    return binarySearch(listy, target, left, mid-1);
  } else {
    return binarySearch(list, target, mid+1, right)
  }
};

console.log(search([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3], 3));
