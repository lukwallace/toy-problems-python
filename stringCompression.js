// Implement a method to perform basic string compression using counts
// of repeat characters. It the "compressed" string is not smaller than
// the original, it should just return the original string.
// Assume [a-zA-Z]*

const compress = (str) => {
  let res = '';
  let count = 1;
  for(let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const lookAhead = str.charAt(i+1);
    if(char === lookAhead) {
      count++;
    } else {
      res += char + (count === 1 ? '' : count);
      count = 1;
    }
  }
  return res.length === str.length ? str : res;
};

// Tests
console.log(compress('awwwddd')); // a1w3d3
console.log(compress('aawwss')); // aawwss
console.log(compress('uibifbwwwwwadddddsddd')); // uibifbw5ad5sd3
