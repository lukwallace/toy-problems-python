/* 
Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element
*/

/* 
Matrix:
upper left = smallest small
lower left = smallest large
upper right = largest small
lower right = largest large
 */


/* With a starting position at the upper right / lower left you can control for your target */
const matrixSearch = (matrix, target, row=matrix.length-1, col=0) => {
  while(row >= 0 && col < matrix[0].length) {
    if(matrix[row][col] === target) {
      return [row, col];
    }

    if(matrix[row][col] < target) {
      col++;
    } else {
      row--;
    }
  }
  return null;
};


const a = [
  [15,20,40,85],
  [20,35,80,95],
  [30,55,95,105],
  [40,80,100,120]
];

console.log(matrixSearch(a, 1));
console.log(matrixSearch(a, 60));
console.log(matrixSearch(a, 95));