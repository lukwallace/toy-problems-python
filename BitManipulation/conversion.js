// Find the number of bits you have to flip to convert one number to another
// Example: 
console.log('Input:');
console.log((27).toString(2));
console.log((16).toString(2));
console.log('Should return: 3');

const conversion = (first, second) => {
  let xor = first ^ second;

  let counter = 0;
  while(xor > 0) {
    if((xor & 1) === 1) {
      counter++;
    } 
    xor = xor >> 1;
  }
  return counter;
};

console.log(conversion(27, 16));
