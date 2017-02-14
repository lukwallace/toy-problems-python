const { getBit, setBit, clearBit } = require('./helper');

//You are given two 32 bit numbers, N and M, and two bit positions, i and j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You can assume that the bits j through i have enough space to fit all of M. That is, if M = 10011 you can assume there are at least 5 bits between j and i. You would not , for example have j = 3, and i = 2, because M could not fully for between bit 3 and bit 2

const insertion = (M, N, i, j) => {
  const one = (~0 << j);
  const two = ((1 << i) - 1);
  const mask = one | two;
  return (N & mask) | (M << i);
};

// one liner version
const ins = (M, N, i, j) => (N&((~0<<j)|((1<<i)-1)))|(M<<i);

const N = parseInt('10000000000', 2);
const M = parseInt('10011', 2); 
console.log(insertion(M, N, 2, 6).toString(2));
console.log(ins(M, N, 2, 6).toString(2));