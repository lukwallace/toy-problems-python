/* 
You are building a diving board by placing a bunch of planks of wood end-to-end. There are two types of planks, one of length shorter and one of length longer. You must use exactly K planks of wood. Write a method to generate all possible lengths for the diving board.
*/

/* 
One such problem where you are not interested in the order of the planks but the total they add up to. 
You can use memoization with the current length and how many planks left over to remove doing duplicate scans
*/

let divingBoard = (k, short, long) => {
  const lengths = {};
  const mem = {};
  const recur = (k, length=0, pocket=[]) => {
    if(k === 0) {
      console.log(pocket);
      return lengths[length] = true;
    }

    if(mem[k + ' ' + length]) {
      console.log('ding')
      return;
    }
    recur(k-1, length + short, pocket.concat(short));
    recur(k-1, length + long, pocket.concat(long));
    mem[k + ' ' + length] = true;
  };
  recur(k);
  console.log(mem);
  return Object.keys(lengths);
};

console.log(divingBoard(4, 1, 5));