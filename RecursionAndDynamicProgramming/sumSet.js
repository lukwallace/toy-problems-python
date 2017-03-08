/* 
Given an array of integers and a target sum, implement an algorithm to determine if you can create the target with numbers in the array 
Example: 
Input: [1, 5, 7, 2] 10
Output: true

Input: [1, 5, 7, 2] 11
Output: false
*/

// S(n) = S(n - k) where n is the target, and k an element
/* Brute force would adding a hash table here make it dynamic programming? Not really, because you're going from the top down */
let sumSet = (set, target) => {
  if(target === 0) {
    return true;
  }
  const mem = {};
  const helper = (target, offset) => {
    console.log(target, set[offset], mem);
    if(mem[target+'with'+set[offset]] !== undefined) {
      console.log('USED TABLE')
      return mem[target+'with'+set[offset]];
    }
    // Base case
    if(target - set[offset] === 0) {
      return true;
    }

    if(target - set[offset] < 0) {
      return false;
    }

    // Recurse on positive
    let res = false;
    for(let i = offset + 1; i < set.length; i++) {
      res = helper(target - set[offset], i);
      if(res) {
        break;
      }
    }

    mem[target+'with'+set[offset]] = res;
    return res;
  };

  for(let i = 0; i < set.length; i++) {
    if(helper(target, i)) {
      return true;
    }
  }
  return false;
};

// /* Brute force v2 */
// sumSet = (set, target) => {
//   const helper = (sum=0, index=0) => {
//     console.log(sum, index);
//     if(sum === target) {
//       return true;
//     }

//     if(sum > target || index === set.length) {
//       return false;
//     }

//     //Either take the number or don't
//     const withNum = helper(sum + set[index], index + 1);
//     const without = helper(sum, index + 1);
//     return withNum || without;
//   };
//   return helper();
// };

/* Dynamic programming example */
sumSet = (set, target) => {
  const mem = [];

  const fill = (target, offset) => {
    if(target === 0) {
      mem[offset][target] = 1;
      return;
    }

    if(offset === 0) {
      mem[offset][target] = target === set[offset] ? 1 : 0;
      return;
    }

    if(mem[offset-1][target] === 1) {
      mem[offset][target] = 1;
      return;
    }

    const subTarget = target - set[offset];
    if(subTarget < 0) {
      mem[offset][target] = 0;
    } 

    if(subTarget === 0) {
      mem[offset][target] = 1;
    }

    if(subTarget > 0) {
      if(offset === 0) {
        mem[offset][target] = 0;
      } else {
        mem[offset][target] = mem[offset - 1][subTarget]
      }
    }
  };

  for(let t = 0; t <= target; t++) {
    for(let offset = 0; offset < set.length; offset++) {
      if(mem[offset] === undefined) {
        mem[offset] = [];
      }
      fill(t, offset);
    }
  }
  console.log(mem);
  return mem[set.length-1][target];
};

console.log(sumSet([5, 7, 2, 1], 12));



