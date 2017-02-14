// Given a real number between 0 and 1 (e.g. 0.72) that is passed in as a double, print the binary representation. If the numer cannot be represetned accurate in binary ith at most 32 characters, print "ERROR".


// Proposed: convert < 0 number to one without decimals and convert that number into binary, then prepend a dot. It sort of bypasses the problem though.

// The key to this one is understanding that you similar to how 0.72 is composed of 7 * (1/10) + 2 * (1/10^2) and that's why when you multiply by 10 you can shift a decimal digit. Likewise for base two. Simply mulitiple by 2.
// Textbook solution:
const binaryToString = (num) => {
  let res = '.';
  while(num > 0) {
    num *= 2;
    if(res.length > 32) {
      break;
    }
    if(num >= 1) {
      res += '1';
      num -= 1;
    } else {
      res += '0';
    }
  }
  return res;
};

console.log(binaryToString(0.5)); // 0.1 = 1 * (1/2^1)