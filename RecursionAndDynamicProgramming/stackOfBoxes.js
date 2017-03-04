/* You have a stack of n boxes, with widths w, heights h, and depths d, THe boxes cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height and depth. Implement a method to compute the height of the tallest possible stack. The height of a stack is the sum of the heights of each box. */

let boxes = (widths, heights, depths) => {
  let tallest = 0;
  const available = [];
  for(let i = 0; i < widths.length; i++) {
    available.push(i);
  }
  const stackable = (bot, top) => {
    if (bot === undefined) {
      return true;
    }
    return heights[bot] > heights[top] && widths[bot] > widths[top] && depths[bot] > depths[top]
  };
  const boxes_helper = (available, solution=[], sum=0) => {
    console.log('Available', available, solution);
    if(sum > tallest) {
      tallest = sum;
    }

    /* For each available box  */
    for(let i = 0; i < available.length; i++) {
      const box = available[i];
      const temp = available.slice(0, i).concat(available.slice(i+1));
      
      /* That is usable */
      if(stackable(solution[0], box)) {
        /* Consider stacking */
        boxes_helper(temp, [box].concat(solution), sum + heights[box]);
      }
    }
  };
  boxes_helper(available);
  return tallest;
};


/* Different parameters -- optimized with sorting */
boxes = (boxArr) => {
  const dup = boxArr.slice();
  const sortedArr = dup.sort((a, b) => b.height - a.height);
  let tallest = 0;

  const stackable = (bot, top) => {
    if(bot === undefined) {
      return true;
    }
    return bot.height > top.height &&
           bot.width > top.width &&
           bot.depth > top.depth;
  };

  const boxes_helper = (startIndex=0, solution=[], sum=0) => {
    console.log(arr);
    console.log('So far:');
    console.log(solution, sum);
    console.log('\n')

    if(sum > tallest) {
      tallest = sum;
    }

    for(let i = startIndex; i < sortedArr.length; i++) {
      const box = sortedArr[i];
      if(stackable(sortedArr[solution[0]], box)) {
        boxes_helper(i+1, [i].concat(solution), sum + box.height); 
      }
    }
  };
  boxes_helper();
  return tallest
};


/* Memoized, sorted allows for simple take or don't take box */
boxes = (boxArr) => {
  const dup = boxArr.slice();
  const sortedArr = dup.sort((a, b) => b.height - a.height);
  const mem = {};

  const stackable = (bot, top) => {
    if(bot === undefined) {
      return true;
    }
    return bot.height > top.height &&
           bot.width > top.width &&
           bot.depth > top.depth;
  };

  /* returns max height for a given bottom */
  const boxes_helper = (topBox, startIndex) => {
    if(startIndex >= sortedArr.length) {
      return 0;
    }

    /* with a new top */
    let heightWithBox = 0;
    const newTop = sortedArr[startIndex];
    if(stackable(topBox, newTop)) {
      if(mem[startIndex] === undefined) {
        mem[startIndex] = 0;
        mem[startIndex] += newTop.height;
        mem[startIndex] += boxes_helper(newTop, startIndex + 1);
      }
      heightWithBox = mem[startIndex];
    }

    /* with the current top (skipping a box) */
    const heightWithoutBox = boxes_helper(topBox, startIndex + 1);
    return Math.max(heightWithBox, heightWithoutBox);
  };
  return boxes_helper(undefined, 0);
}
const arr = [
  { width: 16, height: 16, depth: 13 },
  { width: 6, height: 4, depth: 4 },
  { width: 5, height: 7, depth: 5 },
  { width: 3, height: 3, depth: 3 }
];

console.log(boxes(arr));
// const w = [16, 6, 5, 3];
// const h = [16, 4, 7, 3];
// const d = [13, 4, 5, 3];
// console.log(boxes(w,h,d));

