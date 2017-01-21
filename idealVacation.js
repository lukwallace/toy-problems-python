// Consider an array of integers where each index represents a day 
// and each value a number corresponding to the tourist attraction.
// Come up with a function that returns the length of minimum continous
// sequence of days it will take to go to every attraction.
// Ideal solution is worst case: O(n).

// Example:
// idealVacation([4, 5, 2, 1, 1, 4, 5, 3])  -> 6


const idealVacation = (attractions) => {
  const mem = {};
  attractions.forEach((attraction, index) => {
    mem[attraction] = mem[attraction] || [];
    mem[attraction].push(index);
  });

  let rarest;
  Object.keys(mem).forEach((attraction) => {
    rarest = rarest || attraction;
    if(mem[rarest].length > mem[attraction].length) {
      rarest = attraction;
    }
  });

  let res = Infinity;
  // console.log('Rarest:', rarest);
  mem[rarest].forEach((index) => {
    let memCheck = {};
    let left, right;
    
    // expand left first
    memCheck[attractions[index]] = true;
    let length = 1;
    for(left = index - 1; left >= 0; left--) {
      if(Object.keys(memCheck).length === Object.keys(mem).length) {
        break;
      }
      memCheck[attractions[left]] = true;
      length++;
    }
    for(right = index + 1; right < attractions.length; right++) {
      if(Object.keys(memCheck).length === Object.keys(mem).length) {
        break;
      }
      memCheck[attractions[right]] = true;
      length++;
    }
    res = Math.min(res, length);
    console.log('Maybe Res:', res);
    // expand right first
    memCheck = {};
    memCheck[attractions[index]] = true;
    length = 1;
    for(right = index + 1; right < attractions.length; right++) {
      if(Object.keys(memCheck).length === Object.keys(mem).length) {
        break;
      }
      memCheck[attractions[right]] = true;
      length++;
    }
    for(left = index - 1; left >= 0; left--) {
      if(Object.keys(memCheck).length === Object.keys(mem).length) {
        break;
      }
      memCheck[attractions[left]] = true;
      length++;
    }
    res = Math.min(res, length);
  });
  return res;
};

// console.log(idealVacation([4, 5, 2, 1, 1, 4, 5, 3])); // 6
// console.log(idealVacation([3, 5, 4, 1, 1, 2, 5, 4])); // 6
// console.log(idealVacation([1, 3, 2, 5, 3, 4, 5, 2, 1])); // 5
console.log(idealVacation([3, 3, 2, 5, 5, 3, 4, 5, 3, 2])); // 4
// console.log(idealVacation([3, 3, 2, 5, 5, 3, 4, 2])); // 4
// console.log(idealVacation([1, 1, 3, 3, 2, 1, 5, 5, 3, 4, 5, 3, 2])); // 6
// console.log(idealVacation([7, 3, 7, 3, 1, 3, 4, 1])); // 5
console.log(idealVacation([7, 7, 1, 3, 7, 3, 4, 1, 3, 1, 1, 1, 1])); // 4



