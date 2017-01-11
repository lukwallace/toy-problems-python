// Write a method such that if an element in an MxN matrix
// is 0, the entire row and column becomes 0

// Input: matrix
// Output: matrix

const zeroMatrix = (matrix) => {
  const r = [];
  const c = [];
  for(let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for(let j = 0; j < row.length; j++) {
      const elem = row[j];
      if(elem === 0) {
        r.push(i);
        c.push(j);
      }
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for(let j = 0; j < row.length; j++) {
      if(r.indexOf(i) !== -1 || c.indexOf(j) !== -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const m =
[[1, 1, 1, 1, 1],
 [1, 1, 1, 0, 1],
 [1, 0, 1, 1, 1],
 [1, 1, 1, 1, 1]]
console.log(zeroMatrix(m));

// Output:
// [[1, 0, 1, 0, 1],
//  [0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0],
//  [1, 0, 1, 0, 1]]