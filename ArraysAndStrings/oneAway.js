// Given two strings, write a function to check if 
// they are one (or zero) edits away

const oneAway = function(a, b) {
  let one = true;
  if(a.length === b.length) {
    for(let i = 0; i < a.length; i++) {
      if(a[i] != b[i]) {
        if(one) {
          one = false;
        } else {
          return false;
        }
      }
    }
  } else {
    const short = a.length < b.length ? a : b;
    const long = a.length > b.length ? a : b;
    let j = 0

    for(let i = 0; i < long.length; i++) {
      // console.log('compare', short[j], long[i]);
      if(short[j] !== long[i]) {
        if(one) {
          j--
          one = false;
        } else {
          return false;
        }
      }
      j++
    }
  }
  return true;
};

// Tests
console.log(oneAway('pale', 'pak')); //False
console.log(oneAway('pale', 'pake')); // True
console.log(oneAway('pale', 'pakd')); // False
console.log(oneAway('pale', 'pae')); // True
console.log(oneAway('pale', 'pa')); // False
console.log(oneAway('pale', 'ale')); // True