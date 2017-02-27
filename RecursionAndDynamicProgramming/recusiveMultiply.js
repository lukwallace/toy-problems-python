// Write a recursive function to multiple two positive integers without using the * operator. You can use addition subtraction bit shifting etc. But try to minimize the number of operations.

// This is one such example where if you can encounter some confusion if you're not careful and skip over thinking about brute force first.
let multiply = (a, b) => {
  const small = Math.min(a, b);
  const big = Math.max(a, b);
  const recurse = (small, big) => {
    if(small === 0) {
      return 0;
    }

    if(small % 2 === 1) {
      return recurse(small - 1, big) + big;
    }
    return recurse(small - 2, big) + big + big;
  }
  return recurse(small, big);
};

multiply = (a, b) => {
  const small = Math.min(a, b);
  const big = Math.max(a, b);
  const recurse = (small, big) => {
    if(small === 0) {
      return 0;
    }

    if(small === 1) {
      return big;
    }

    const half = recurse(small >> 1, big);
    // Odd
    if(small % 2 === 1) {
      return half + half + big;
    }
    // Even
    return half + half;
  };
  return recurse(small, big);
};

console.log(multiply(31, 35));
console.log(multiply(5, 6));