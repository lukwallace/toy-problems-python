const mem = { '0': 1, '1': 1};
const recurse = (n) => {
  if(mem[n] === undefined) {
    mem[n] = recurse(n-1) + recurse(n-2);
  }
  return mem[n];
};

// Tests
console.log(recurse(5));
console.log(recurse(3));