/* Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order */

/* 
Its a binary search with an offset?
Reasonable? Implies finding the offset without scanning through the whole array. Finding the pivot seems like a waste of time.
Thinking its just a special binary search */ 


const search = (arr, target, left=0, right=arr.length-1) => {
  // Base case
  if(left > right) {
    return null;
  }

  const mid = Math.floor((left + right) / 2);
  const midValue = arr[mid];
  const leftValue = arr[left];
  const rightValue = arr[right];
  if(midValue === target) {
    return mid;
  }

  // Left Pivot
  if(leftValue > midValue) {
    if(midValue < target && target < rightValue) {
      //Right
      return search(arr, target, mid+1, right);
    } else {
      //Left
      return search(arr, target, left, mid-1);
    }
  }
  // Right Pivot
  if(rightValue < midValue) {
    if(leftValue < target && target < midValue) {
      //Left
      return search(arr, target, left, mid-1);
    } else {
      // Right
      return search(arr, target, mid+1, right);
    }
  }

  // No idea where pivot is e.g. [3, 1, 2, 3, 3 ,3, 3] vs [3, 3 ,3, 3, 1, 2, 3]
  if(leftValue === midValue && midValue === rightValue) {
    console.log('I shouldn\'t be saying this', leftValue, midValue, rightValue);
    return search(arr, target, mid+1, right) || search(arr, target, left, mid-1);
  }
  
  // No pivot
  if(target < mid) {
    // Left
    return search(arr, target, left, mid-1);
  } else {
    // Right
    return search(arr, target, mid+1, right);
  }

}

console.log(search([15,16,19,20,25,1,3,4,5,7,10,14], 100))
