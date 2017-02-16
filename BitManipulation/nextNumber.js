const assert = require('assert');

// Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.

// Some testcases/examples
// 110100110
//      original: 110100110
// next smallest: 110100101

//     original: 110100110
// next largest: 110101001

// 1011101110
//      original: 1011101110
// next smallest: 1011101101

//     original: 1011101110
// next largest: 1011110111

// 0100010001
// 0100001100

// largest - Grab next zero after seeing a one and shift all ones seen to the right
// smallest - Grab next one after seeing a zero and shift all ones to the left
// Going to want to use assert to avoid eye errors when checking tests.
// assert(true == false, 'Obvious error');

const nextLargest = (num) => {
  let offset = 0;
  let curr = undefined;
  let ones = 0;
  let numDup = num;
  while(true) {
    curr = (numDup & 1);
    if(curr === 1) {
      ones++;
    } else if (ones > 0) {
      break;
    }
    numDup = numDup >> 1;
    offset++;
  }

  let mask = (1 << offset);
  num = num | mask;
  mask = ~(mask - 1)
  return (num & mask) | ((1 << (ones - 1))-1);
};

const nextSmallest = (num) => {
  let offset = 0;
  let curr = undefined;
  let zeros = 0;
  let numDup = num;
  while(true) {
    curr = (numDup & 1);
    if(curr === 0) {
      zeros++;
    } else if (zeros > 0) {
      break;
    }
    numDup = numDup >> 1;
    offset++;
  }
  const ones = offset - zeros + 1;
  let mask = ~(1 << offset);
  num = num & mask;
  mask = (~((~mask) - 1))
  return (num & mask) | (((1 << ones) - 1) << zeros - 1);
};

const nextNumber = (num) => {
  console.log('Calling next number!');
  console.log(num.toString(2));
  if(num === -1 || num === 0) {
    console.log(num.toString(2));
    console.log(num.toString(2));
  } else{ 
    console.log(nextLargest(num).toString(2));
    console.log(nextSmallest(num).toString(2));
  }
};

nextNumber(parseInt('110100110', 2));
nextNumber(parseInt('001011001', 2));
