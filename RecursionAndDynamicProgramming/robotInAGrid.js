// Imageine a robot sitting on the upper left ocrner of a grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot connot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.


// Given a r by c double array of ones and zeros, where ones represent off "limits"
// Define a path as an array of strings - "Down" or "Right"
const findPath = (grid, x=0, y=0, path=[]) => {
  if(x >= grid[0].length || y >= grid.length || grid[x][y] === 1) {
    return null;
  }

  // We've found the lower right corner
  if(x === grid[0].length - 1 && y === grid.length - 1) {
    return path.slice();
  }

  path.push('Right');
  const p1 = findPath(grid, x, y+1, path);
  path.pop();

  path.push('Down');
  const p2 = findPath(grid, x+1, y, path);
  path.pop();

  return p1 || p2;
};


const g = [
[0, 1, 0, 0],
[0, 0, 1, 0],
[0, 1, 0, 0],
[0, 0, 0, 0]
];

console.log(findPath(g));