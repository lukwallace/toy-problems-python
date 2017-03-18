/* 
You have an array with all the numbers from 1 to N where N is at most 32,000. The arrat may have duplicate entries and you do not know what N is. With only 4 kilobytes available, how would you print all duplicate elements in the array.

Worst case: N is 32,000
4kb -> 4,000 bytes -> 32,000 bits

*/

/* Here I am assuming integers in Javascript are 32 bit, (they are actually 64bit floating-point doubles)  */
const findDuplicates = (array) => {
  const mem = [];
  // Initialize 1000 32-bit integers to represent 32,000 bits;
  for(let i = 0; i < 1000; i++) {
    mem.push(0);
  }

  array.forEach(number => {
    const memPosition = Math.floor((number-1) / 32);
    const offset = (number-1) % 32;
    const word = mem[memPosition];
    const value = word & (1 << offset);
    if(value !== 0) {
      console.log(number);
    } else {
      mem[memPosition] = mem[memPosition] | (1 << offset);
    }
  });
};