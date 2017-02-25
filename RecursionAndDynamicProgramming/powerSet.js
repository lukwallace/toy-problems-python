// Write a function to return all subsets of a set
// Example: [1, 2, 3];
// []
// [1]
// [1, 2]
// [1, 3]
// [2]
// [2, 3]
// [3]
// [1, 2, 3]
let powerSet = (set) => {
  const allSets = [];
  const recurse = (pocket=[], counter=0) => {
    if(counter === set.length) {
      allSets.push(pocket);
      return;
    }
    recurse(pocket, counter+1);
    recurse(pocket.concat(set[counter]), counter+1);
  };
  recurse();
  return allSets;
};

// powerSet(n) = powerSet(n-1) + powerSet(n-1).map(elem => elem.concat(x))
// powerSet = (set) => {
//   if(set.length === 0) {
//     return [[]];
//   }

//   const dup = set.slice();
//   const x = dup.pop();
//   const oneLess = powerSet(dup);
//   const res = oneLess.concat(oneLess.map(subSet => subSet.concat([x])));
//   return res;
// };


console.log(powerSet([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));