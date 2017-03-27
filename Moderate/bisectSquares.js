/* 
Given two squares on a two-dimensional plane, find a line that would cut these two squares in half. Assume that the top and the bottom sides of the sqaure run parallel to the x-axis
*/

/* 
Define a square by its four sides, left right top bottom
left 4,
right, 6
top, 2
bottom, 0
*/
 
const mid = (one) => {
  const oneX = one.left + ((one.right - one.left) / 2);
  const oneY = one.bottom + ((one.top - one.bottom) / 2);
  return [oneX, oneY];
}

const bisectSquares = (one, two) => {
  const midOne = mid(one);
  const midTwo = mid(two);
  const sizehalf = Math.abs(one.left - one.right) / 2;
  const slope = (midOne[1] - midTwo[1]) / (midOne[0] - midTwo[0]);
  const intercept = midOne[1] - slope * midOne[0];

  console.log(midOne, midTwo, slope);

  // slopeX + inter = Y
  /* Direction to go from square one */
  const xdir = midOne[0] > midTwo[0] ? 1 : -1;
  const ydir = midOne[1] > midTwo[1] ? 1 : -1;
  //cases: slope is 0, 1, > 1 and < 1, for steep and shallow slopes you have to add differently to get to the square edge
  if (slope === 0) {
    return [[midOne[0], midOne[1] + ydir * sizehalf], 
            [midTwo[0], midTwo[1] + -1 * ydir * sizehalf]];
  }

  if (slope === 1) {
    return [[midOne[0] + xdir * sizehalf, midOne[1] + ydir * sizehalf],
            [midTwo[0] + -1 * xdir * sizehalf, midTwo[1] + -1 * ydir * sizehalf]]
  }

  if(slope > 1) {
    const yOne = midOne[1] + ydir * sizehalf;
    const yTwo = midTwo[1] + -1 * ydir * sizehalf;
    return [[(yOne - intercept) / slope, yOne],
            [(yTwo - intercept) / slope, yTwo]];
  }

  if(slope < 1) {
    const xOne = midOne[0] + xdir * sizehalf;
    const xTwo = midTwo[0] + -1 * xdir * sizehalf;
    return [[xOne, slope * xOne + intercept],
            [xTwo, slope * xTwo + intercept]];
  }

};

const one = {
  left: 4,
  right: 6,
  top: 2,
  bottom: 0
};

const two = {
  left: 4,
  right: 6,
  top: 2,
  bottom: 0
};

bisectSquares(one, two);
