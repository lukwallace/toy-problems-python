// Given a string write a function to check if it 
// is a permutation of a palindrome, ignore spaces

const palindromePermutation = function(string) {
  const sani = string.split(/\s+/).join('');
  const mem = {};
  let odd = sani.length % 2;
  let palindrome = true;

  for(var i = 0; i < sani.length; i++) {
    const char = sani[i];
    mem[char] = mem[char] === undefined ? 1 : mem[char] + 1
  }

  Object.keys(mem).forEach((key) => {
    if(mem[key] % 2 !== 0) {
      if(odd) {
        odd = 0;
      } else {
        palindrome = false;
      }
    }
  });

  return palindrome;
};

// Tests
console.log(palindromePermutation('taco cat')); // True
console.log(palindromePermutation('racecar')); // True
console.log(palindromePermutation('taco truck')); // false