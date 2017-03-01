// Write a method to compute all permutations of a string of unique characters
// "wal"

// wal
// wla
// awl
// alw
// law
// lwa

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

console.log(permutationsNoDups("wal"));