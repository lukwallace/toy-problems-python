const assert = require('assert');
// A Monochrome screen is stored as a single array of bytes, allwing eight consecutive pixels to be stored in one byte. The screen has width w where w is divisble by 8 (that is, no byte will be split across rows). The height of the screen, of course, can be derived from the length of the array and the width. Implement a function that drwas a horizonal line from (x1, y) to (x2, y).

const drawLine = (screen, width, x1, x2, y) => {
  // Guaranteed none-fractional height.
  const height = screen.length / width;

  // Sets you to the start of the row you're interested in
  const rowIndex = y * width;

  // Assuming 0 <= x1 <= x2 <= width*8 
  // Assuming 8bit number representing a pixel value
  let startOffset = (x1 / 8) | 0;
  let endOffset = (x2 / 8) | 0;
  let startIndex = x1 % 8;
  let endIndex = x2 % 8;
  assert(endOffset >= startOffset);
  let byteIndex = rowIndex + startOffset;

  // Four cases: Full black, Right black, Left black, Pocket black
  if(startOffset === endOffset) {
    //Pocket black
    const byte = screen[byteIndex];
    const maskOne = ((1 << (8 - startIndex)) - 1);
    const maskTwo = ((1 << (8 - endIndex)) - 1);
    const mask = (~((~maskOne) | maskTwo));
    screen[headIndex + startOffset] = byte | mask;
  } else {
    // Left black, full black, right black
    const maskOne = ((1 << (8 - startIndex)) - 1);
    screen[byteIndex] = screen[byteIndex] | mask;
    byteIndex++;
    while(byteIndex !== rowIndex + endOffset) {
      screen[byteIndex] = 255;
      byteIndex++;
    }
    const maskTwo = ((1 << (8 - endIndex)) - 1);
    screen[byteIndex] = (screen[byteIndex] | (~mask));
};
