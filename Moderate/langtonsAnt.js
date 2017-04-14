/* 
An ant is sitting on an infinite grid of white and black squares. Initially, the grid is all white and the ant faces right. At each step, it does the following:

1) At a white sqare, flip the color of the square, turn 90 degrees right (clockwise), and move foward one unit
2) At a black square, flip the color of the square, turn 90 degrees left (counter-clockwise), and move foward one unit

Write a program to simulate the first K moves that the ant makes and print the final board state as a grid. Note that you are not provided with the data structures to represent the grid. This is something you must design yourself. The only input to your method is K. You should print the final grid and return nothing.
*/

// Simple:
// Given number of steps K we can assume the ant will travel at most K steps from the center
// Make a 2k x 2k grid? 0 is white, 1 is black;

// Better:
// We could just keep track of one color and have the other be the inverse set. Then we could keep track of the
// coordinates that come out and adjust out grid accordingly.

const antGrid = (k) => {
  // Define a coord as 'number,number'
  const blacks = {};
  let topLeftRow = 0;
  let topLeftCol = 0;
  let botRightRow = 0;
  let botRightCol = 0;

  // Populate the grid
  let row = 0;
  let col = 0;
  let orientation = 'right';
  // ^ Could be made cleaner with an orientation object and native methods for opposites e.g. left.opposite -> right
  for(let i = 0; i < k; i++) {
    const blackCell = blacks[row + ',' + col];
    // Flip the cell
    if(blackCell) {
      delete blacks[row + ',' + col];
    } else {
      blacks[row + ',' + col] = true;
    }

    // White - turn right 
    if(!blackCell) {
      if(orientation === 'right' || orientation === 'left') {
        row += orientation === 'right' ? 1 : -1;
        orientation = orientation === 'right' ? 'down' : 'up';
      } else {
        col += orientation === 'up' ? 1 : -1;
        orientation = orientation === 'up' ? 'right' : 'left';
      }

    // Black - turn left
    } else {
      if(orientation === 'right' || orientation === 'left') {
        row += orientation === 'right' ? -1 : 1;
        orientation = orientation === 'right' ? 'up' : 'down';
      } else {
        col += orientation === 'up' ? -1 : 1;
        orientation = orientation === 'up' ? 'left' : 'right';
      }
    }

    // Adjust top left and bottom right corner max mins
    topLeftRow = Math.min(topLeftRow, row);
    topLeftCol = Math.min(topLeftCol, col);
    botRightRow = Math.max(botRightRow, row);
    botRightCol = Math.max(botRightCol, col);
  }

  // Construct grid
  const grid = [];
  for(let i = topLeftRow; i <= botRightRow; i++) {
    const row = [];
    for(let j = topLeftCol; j <= botRightCol; j++) {
      if(blacks[i + ',' + j]) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    grid.push(row);
  }
  console.log(grid);
};

antGrid(100);