/* 
You are given two strings, pattern and value. The pattern string consists of just he letters a and b, describing a pattern within a string. For example, the string catcatgocatgo matches the pattern aabab (where cat is a and go is b).
It also matches patterns like a, ab, and b. Write a method to determine if value matches pattern.
*/

const checkMatch = (pattern, value, subString, count) => {
  const one = pattern.charAt(0);
  const other = one === 'a' ? 'b' : 'a';
  const occurances = count[one];
  const spaceForOther = value.length - (subString.length * occurances);
  if(subString === 'cat') {
    // console.log(spaceForOther, count);
  }
  if(spaceForOther < 0 || spaceForOther % count[other] !== 0) {
    return false;
  }

  /* The length of the other substring can be used to find the otherSubstring later */
  const otherLength = spaceForOther / count[other];
  let res = '';
  let otherSubString = undefined;
  for(let i = 0; i < pattern.length; i++) {
    if(pattern.charAt(i) === one) {
      res += subString;
    } else {
      if(otherSubString === undefined) {
        otherSubString = value.slice(i * subString.length, i * subString.length + otherLength);
      } 
      res += otherSubString;
    }
  }
  console.log(subString, res, value, res === value);
  return res === value;
}

const patternMatch = (pattern, value) => {
  const count = {};
  for(let i = 0; i < pattern.length; i++) {
    const AorB = pattern.charAt(i);
    if(count[AorB] === undefined) {
      count[AorB] = 0;
    }
    count[AorB]++;
  }

  for(let i = 1; i <= value.length; i++) {
    let subString = value.slice(0, i);
    if(checkMatch(pattern, value, subString, count)) {
      return true;
    };
  }
  return false;
};

console.log(patternMatch('aabab', 'catcatgocatgo'));