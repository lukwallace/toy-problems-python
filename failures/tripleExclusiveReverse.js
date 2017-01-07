// Write up / Lessons learned:
// 1) Performance massively degrades when under pressure
// 2) 'They will have you work in Google Docs' was definitely not a joke
// 3) Reliance on build systems stagnates mental flexibility
// 4) Think before you type. Nervously rushing to code does not benefit you.


const tripleExclusiveReverse = (str) => {
  let count = 0;
  let curr = '';
  let res = '';
  for(let i = str.length -1; i >= 0; i--) {
    const char = str[i];
    res += char;
    if(char === curr) {
      count++;
    } else {
      curr = char;
      count = 1;
    }

    if(count === 3) {
      res = res.slice(0, -3);
    }
  }
  return res;
};

console.log(tripleExclusiveReverse('Wallllace')); // ecalaW
console.log(tripleExclusiveReverse('Pencilll')); // icneP
console.log(tripleExclusiveReverse('aaAdddds')); // sdAaa