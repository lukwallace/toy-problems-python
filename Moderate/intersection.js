/* Given two straight line segments (represented as a start point and an end point), compute the point of intersection, if any */

const inRange = (x, y, val) => {
  return !((val > x && val > y) || (val < x && val < y));
};

// console.log(inRange(-4, 2, 3));
// console.log(inRange(6, 7, 4));
// console.log(inRange(6, 7, 7));

const intersection = (oneX, oneY, twoX, twoY, threeX, threeY, fourX, fourY) => {
  const slopeA = (twoY - oneY) / (twoX - oneX);
  const slopeB = (fourY - threeY) / (fourX - threeX);
  console.log(inRange(oneY, twoY, threeY));
  console.log(inRange(threeY, fourY, oneY));

  /* Slopes are different */
  if((inRange(oneX, twoX, threeX) || inRange(threeX, fourX, oneX)) &&
     (inRange(oneY, twoY, threeY) || inRange(threeY, fourY, oneY))) {
      const interceptA = oneY - (Math.abs(0 - oneX) * slopeA);
      const interceptB = threeY - (Math.abs(0 - threeX) * slopeB);
      // slope * x + intercept = y
      const interX = (interceptB - interceptA) / (slopeA - slopeB);
      const interY = slopeA * interX + interceptA;
      console.log(interX, interY);
  } else {
    console.log('Nope');
  }
};

// intersection(0, 0, 5, 5, 0, 7, 6, -5);
intersection(0, 0, 5, 5, 0, 5, 6, 8);