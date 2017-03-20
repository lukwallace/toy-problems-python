/* 
Write an algorithm which computes the number of trailing zeros in factorial.

Assumptions: must account for overly large numbers.
15! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11 * 12 * 13 * 14 * 15

You can redistribute numbers with the communative property of multiplication.
15! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 2 * 5 * 11 * 12 * 13 * 2 * 7 * 3 * 5
15! = 1 * 3 * 3 * 4 * 6 * 7 * 7 * 8 * 9 * 11 * 12 * 13 * (2 * 5 * 2 * 5 * 2 * 5)
15! = 1 * 3 * 3 * 4 * 6 * 7 * 7 * 8 * 9 * 11 * 12 * 13 * 1000
All trailing zeros must be be created via a pair of 5 and 2;
There are more 2s than 5s

What about 25? or 125?
Solution is to count the number of multiples of 5, then multiples of 25, then multiples of 125 etc.

*/

const factorialZeros = (n) => {
  let res = 0;
  for(let i = 5; i <= n; i *= 5) {
    res += Math.floor(n/i);
  }
  return res;
};

console.log(factorialZeros(60));