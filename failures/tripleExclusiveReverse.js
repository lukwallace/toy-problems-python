const reverse = (str) => {
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

console.log(reverse('Wallllace')); // ecalaW
console.log(reverse('Pencilll')); // icneP
console.log(reverse('aaAdddds')); // sdAaa