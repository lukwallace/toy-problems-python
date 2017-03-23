/* 
Write methods to implemnt the multiply, subtract, and divide operations for integers. The results of all these are integers. Use only the add operator
*/

const abs = (x) => {
  if(x < 0) {
    let res = 0;
    while(x !== 0) {
      res++;
      x++;
    }
    return res;
  }
  return x;
}

const negate = (x) => {
  const inc = x < 0 ? 1 : -1;
  let res = 0;
  while(x !== 0) {
    res += inc;
    x += inc;
  }
  return res;
}

const multiply = (a, b) => {
  if(a === 0 || b === 0) {
    return 0;
  }

  let sum = 0;
  for(let i = 0; i < Math.abs(a); i++) {
    sum += Math.abs(b);
  }

  if((a < 0 && b < 0) || (a > 0 && b > 0)) {
    return sum;
  }
  return negate(sum);
}

const subtract = (a, b) => {
  if((a < 0 && b < 0) || (a >= 0 && b >= 0)) {
    const inc = b < 0 ? 1 : -1;
    while(b !== 0) {
      b += inc;
      a += inc;
    }
    return a;
  }
  let res = Math.abs(a) + Math.abs(b);
  return a < 0 ? negate(res) : res;
}

const divide = (a, b) => {
  if(b === 0) {
    return undefined;
  }

  let sum = 0;
  let counter = 0;
  while(sum !== Math.abs(a)) {

    if(sum > 1000 || sum < -1000) {
      break;
    }
    sum += Math.abs(b); 
    counter++;
  }
  if((a < 0 && b < 0) || (a >= 0 && b >= 0)) {
    return counter;
  } else {
    return negate(counter);
  }
};

console.log(divide(-6, 2));
// console.log(multiply(-3, 2));