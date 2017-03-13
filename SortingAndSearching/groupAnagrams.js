/* Write a method to sort an array of strings so that all the anagrams are next to each other */
const groupAnagrams = (arr) => {
  const mem = {};
  let res = [];

  arr.forEach(string => {
    const sorted = string.split('').sort().join('');
    if(mem[sorted] === undefined) {
      mem[sorted] = [];
    }
    mem[sorted].push(string);
  });

  for(let key in mem) {
    res = res.concat(mem[key]);
  }

  return res;
};

console.log(groupAnagrams(["rat", "race", "tar", "acer", "wallace", "atr"]));