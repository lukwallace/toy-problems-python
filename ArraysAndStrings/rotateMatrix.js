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

// Doing it in place
//rotate each layer
// N = 1, rotate 0 layers
// N = 2, rotate 1 layers
// N = 3, rotate 1 layers
// N = 4, rotate 2 layers
// N = 5, rotate 2 layers
// N = 6, rotate 3 layers
const rotate = (matrix) => {
  //For each layer
  let start, end;
  let offset = 0;
  for(let i = 0; i < Math.floor(matrix.length / 2); i++){
    start = i;
    end = matrix.length - 1 - offset;
    console.log('start, end:', start, end);
    for(let j = start; j < end; j++) {
      console.log(start, j, end-j)

      let temp = matrix[start][j];
      matrix[start][j] = matrix[end-j+offset][start];
      matrix[end-j+offset][start] = matrix[end][end-j+offset];
      matrix[end][end-j+offset] = matrix[j][end];
      matrix[j][end] = temp;

      // matrix[start][j] // TOP
      // matrix[j][end] // RIGHT
      // matrix[end][end-j+offset] //BOTTOM
      // matrix[end-j+offset][start] //LEFT
      
    }
    offset++;
  }
  console.log(matrix);
};

const m = 
  [[1, 2, 3, 4],
   [5, 6, 7, 8],
   [9, 10, 11, 12],
   [13, 14, 15, 16]];

const n = [[1, 2],
           [3, 4]];
// Test
// console.log(rotateMatrix(m));
rotate(m);
rotate(n);

