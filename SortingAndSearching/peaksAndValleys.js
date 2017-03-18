/* In an array of integers, a 'peak' is an element which is greater than or equal to the adjacent integers and a 'valley' is an element which is less than or equal to the adjacent integers. For example, in the array [5, 8, 6, 2, 3, 4, 6], [8, 6] are peaks, and [5, 2] are valleys. Given an array of integers, sort the array into an alternating sequence of peaks and valleys. */

/*
The cool thing about this is that this arragement can be done in O(n) time 
If we iterate through the array comparing pairs, we know for any pair b, c (where b comes before c) if we're looking for a peak - we expect c to be less than b. If it is, we can move to the next pair, if it isn't, that means c > b and we can swap c and b. This swap is safe because must be an integer a before b, where b > a. Since we know c > b > a, swaping to create [a, c, b] still greats a peak because c is guaranteed to be greater than a since it's greater than b.
*/
const alternate = (array) => {
  if(array.length === 1 || array.length === 0) {
    return array;
  }

  const swap = (a, b) => {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  let lessThan = array[0] <= array[1] ? true : false;
  for(let i = 2; i < array.length; i++) {
    if(lessThan && array[i] > array[i-1]) {
      swap(i, i-1);
    } else if(!lessThan && array[i] < array[i-1]) {
      swap(i, i-1);
    }
    lessThan = !lessThan;
  }
  return array;
};

console.log(alternate([5, 3, 1, 2, 3]));