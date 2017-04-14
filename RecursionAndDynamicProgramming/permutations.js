// Write a method to compute all permutations of a string of unique characters
// Input: wal
// Output: [wal, wla, awl, alw, law, lwa]

const permutationsNoDups = (str, start=0) => {
  if(start === str.length - 1) {
    return [str.charAt(start)];
  }

  const prev = permutationsNoDups(str, start+1);
  const piece = str.charAt(start);
  const res = [];
  prev.forEach((perm) => {
    for(let i = 0; i < perm.length; i++) {
      const first = perm.slice(0, i);
      const last = perm.slice(i);
      res.push(first + piece + last);
    }
    res.push(perm + piece);
  });
  // console.log(res);
  return res;
};

// Now with a string that might have duplicates
const permutations = (str) => {

  // Count the letters
  const count = {}
  for(let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if(count[letter] === undefined) {
      count[letter] = 0;
    };
    count[letter]++;
  }


  const recurse = (length=str.length) => {
    // console.log(count);
    if(length === 0) {
      return [''];
    }

    const res = [];
    for(let key in count) {
      if(count[key] !== 0) {
        count[key]--;
        recurse(length - 1).forEach(stringmutation => {
          res.push(key + stringmutation);
        });
        count[key]++;
      }
    }
    return res;
  };
  return recurse();
};
// console.log(permutationsNoDups("wal"));
const check = {};
permutations("aabbcc").forEach(perm => {
  if(check[perm]) {
    console.log('Match!', perm)
  } 
  check[perm] = true
  console.log(perm);
});


