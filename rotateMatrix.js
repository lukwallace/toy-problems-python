// Given a NxN matrix of where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees.
// Can you do this in place?

// Assuming 32-bit integers in JavaScript, a double array of ints
const rotateMatrix = (matrix) => {
  const res = [];
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix.length; col++) {
      const e = matrix[row][col];
      res[col] = res[col] || [];
      res[col].unshift(e);
    }
  }
  return res;
};

const m = 
  [[1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]];

// Test
console.log(rotateMatrix(m));

