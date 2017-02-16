// You have an integer you can flip exacatly one bit from a 0 to a 1. Write code to find the length of the ongest sequence of 1s you could create.

// Example
// Input: 1775 (or: 11011101111)
// Output: 8

let flipABit = (num) => {
  let curr = undefined;
  let searchingFor = 0;
  let counter = 0;
  const sequence = [];
  while(num !== 0) {
    curr = (num & 1);
    if(curr !== searchingFor) {
      sequence.push(counter);
      searchingFor = curr;
      counter = 0;
    }

    counter++;
    num = num >> 1;
  }
  sequence.push(counter);

  console.log(sequence);
  let largest = 0;
  sequence.forEach((item, index) => {
    let isZero = (index % 2) === 0;
    if(isZero && item === 1) {
      let prev = sequence[index-1] || 0;
      let next = sequence[index+1] || 0;
      largest = Math.max(largest, prev + next + 1);
    }
  });
  return largest;
};

flipABit = (num) => {
  let curr = undefined;
  let searchingFor = 0;
  let counter = 0;
  let largest = 0;
  let prev = 0;
  let singleZero = false;
  let firstZero = false;
  while(num !== 0) {
    curr = (num & 1);
    if(curr !== searchingFor) {
      if(searchingFor === 1) {
        firstZero = true;
        if(singleZero) {
          largest = Math.max(largest, counter + prev + 1);
        } else {
          largest = Math.max(largest, counter + firstZero ? 1 : 0);
        }
        prev = counter;
      } else if(searchingFor === 0) {
        singleZero = counter === 1;
      }
      searchingFor = curr;
      counter = 0;
    }

    counter++;
    num = num >> 1;
  }

  if(searchingFor === 1) {
    firstZero = true;
    if(singleZero) {
      largest = Math.max(largest, counter + prev + 1);
    } else {
      largest = Math.max(largest, counter + firstZero ? 1 : 0);
    }
  }

  return largest;
};

//Tests
console.log(flipABit(1775)); //8
console.log(flipABit(parseInt('1111011101', 2))); //8


