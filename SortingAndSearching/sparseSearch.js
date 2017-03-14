/* 
Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string 
Example: ball ["at", "", "", "", "ball", "", "", "dad", "", ""] ;


Immediately: no O(n) stuff, binary search will sometimes yield empty strings, easiest is just finding the closest
*/

const sparseSearch = (arr, target, left=0, right=arr.length-1) => {
  if(left > right) {
    return null;
  }

  let mid = Math.floor((left + right)/2);
  if(arr[mid] === '') {
    let l = mid - 1;
    let r = mid + 1;
    while(arr[mid] === '' && (l >= left || r <= right)) {
      if(arr[l] !== '' && l >= left) {
        mid = l;
      }

      if(arr[r] !== '' && r <= right) {
        mid = r;
      }

      l--;
      r++;
    }
  }

  if(arr[mid] === target) {
    return mid;
  }
  if(arr[mid] > target) {
    return sparseSearch(arr, target, left, mid - 1);
  } else {
    return sparseSearch(arr, target, mid+1, right);
  }
};

console.log(sparseSearch(["at", "", "", "", "ball", "", "", "dad", "", ""], "ball"))

