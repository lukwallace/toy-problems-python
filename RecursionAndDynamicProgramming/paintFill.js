/* Implement the 'paint fill' function that one might see on many image editing programs. THat is, given a screen (represented by a two-dimensional array of colors), a point, and a new color, fill in the surrounding area until the color changes from the original color. */

const paintFill = (screen, x, y, fill) => {
  const curr = screen[x][y];
  const paint = (x, y) => {
    if(x >= screen.length || x < 0 || y >= screen[0].length || y < 0) {
      return;
    }
    const pixel = screen[x][y];
    if(pixel === curr) {
      screen[x][y] = fill;
      paint(x-1, y);
      paint(x+1, y);
      paint(x, y-1);
      paint(x, y+1);
    }
  };
  paint(x,y);
};

const screen = [
[0,0,0,0,0,0,0],
[0,0,1,1,1,1,0],
[0,1,0,0,1,0,0],
[0,0,1,1,1,0,0],
[0,0,0,0,0,0,0]
];

paintFill(screen, 2, 2, 2);
console.log(screen);