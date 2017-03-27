/* 
Given a two-dimensional graph with points on it, find a line which passes the most number of points
Assuming a line is defined by its slope and y-intercept.
Assuming points are not sorted in any particular fashion.

*/

const epsillon = 0.0001;
const toEsp = (val) => {
  return Math.round(val / epsillon) * epsillon;
};

const isEqual = (one, two) => {
  if((Math.abs(one.slope - two.slope) > epsillon) &&
     (Math.abs(one.yinter - two.yinter) > epsillon)) {
    return true;
  }
  return false;
}

const makeLine = (one, two) => {
  let slope;
  let yinter
  if(Math.abs(two.x - one.x) > epsillon) {
    slope = (two.y - one.y) / (two.x - one.x);
    yinter = one.y - (slope * one.x);
  } else {
    /* No slope if two points are directly on top of each other */
    slope = 0;
    yinter = one.x;
  }

  return { slope, yinter };
};

const compare = (line, mem, key) => {
  let localCount = 0;
  mem[key].forEach(parallel => {
    if(isEqual(line, parallel)) {
      localCount++;
    }
  })
  return localCount;
}

const bestLine = (points) => {
  const mem = {};
  let bestLine = undefined; 
  let bestCount = 0;
  for(let i = 0; i < points.length-1; i++) {
    for(let j = i+1; j < points.length; j++) {
      const line = makeLine(points[i], points[j]);
      const key = toEsp(line.slope);
      if(mem[key] === undefined) {
        mem[key] = [];
      } 
      /* Organizing into a hashtable of same slope lines; its tempting here to key by slope and intercept here, and the value be the number of times the line is seen. I.e. if you see the same line twice via three perfect points in the graph, the value corresponding to that line would be 2. Organizing it this way however makes it hard to count things that a espillon close -- specifics would be checking at keys slope & yint, slope+esp & yint+esp, slope-esp & yint-esp, slope+esp & yint-esp, slope-esp & yint+esp.  Instead, the book seems to implicitly recoomend pooling lines by their slopes into arrays of parallel lines and checking above and below. */
      mem[key].push(line);
    }
  }

  /* For each slope */
  Object.key(mem).forEach(slope => {
    let count = 0;
    mem[slope].forEach(line => {

      /* For each line at a specific slope, you have to scan through all other lines in its range, and slope +/- espillon */
      count += compare(line, mem, slope);
      count += compare(line, mem, slope + espillon);
      count += compare(line, mem, slope - espillon);

      if(count > bestCount) {
        bestCount = count;
        bestLine = line;
      }
    });
  });
  return bestLine;
};

