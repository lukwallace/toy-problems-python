/* 
Given two arrays of integers, find a pair of values (one value from each array) that you can swap to give the two arrays the same sum.

EXAMPLE:
Input: [4, 1, 2, 1, 1, 2], [3, 6, 3, 3]
Ouput: [1, 3]; 

Thoughts:
Swapping two numbers has the result of 
sumA - a + b
sumB - b + a

You want the results to be equal to each other: 
sumA - a + b = sumB - b + a
sumA - sumB = 2a - 2b
(sumA - sumB)/2 = a - b


^ this thing can be calculated ahead of time

This way, for any given a, we can know a - (sumA - sumB)/2 is our target b value
*/

const smartSwap = (a, b) => {
  const sumA = a.reduce((acc, elem) => acc + elem);
  let sumB = 0;
  const bMem = {};
  for(let i = 0;  i < b.length; i++) {
    const elem = b[i];
    sumB += elem;
    bMem[elem] = true;
  }

  const difference = (sumA - sumB) / 2;
  console.log(difference, bMem)
  for(let i = 0; i < a.length; i++) {
    const elem = a[i];
    if(bMem[elem - difference]) {
      return [elem, elem - difference];
    }
  }
  return undefined;
};

console.log(smartSwap([4,1,2,1,1,2], [3,6,3,3]))