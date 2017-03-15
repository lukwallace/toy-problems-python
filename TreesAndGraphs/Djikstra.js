/* 
Djisksta's algorithm acts as a solution to the shortest path problem in a graph. 
Our underlining assumptions: 
Graph with two way edges (no one way streets).
Graph nodes hold a unique name value
All edge values are positive
*/

/* 
name: name of the location
neighbors: array of references to other nodes
paths: array of distances from curr node to the respective neighbor node
*/
const Node = function(name) {
  this.name = name;
  this.neighbors = [];
  this.paths = [];
};

/* 
All we're interested in is the current smallest distance from the start. A sorted list is good for this, but since we are only interested in the smallest, so semi sorted is okay as well, this means a min heap will do.
*/

const swap = (array, a, b) => {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};

const insert = (pQueue, name, dist) => {
  pQueue.push(name);
  let currInd = pQueue.length - 1;
  let parentInd = Math.floor((currInd - 1) / 2);
  let currVal = dist[pQueue[currInd]];
  let parentVal = dist[pQueue[parentInd]];

  while(currInd !== 0 && parentVal > currVal) {
    swap(pQueue, currInd, parentInd);
    currInd = parentInd;
    parentInd = Math.floor((currInd - 1) / 2);
    currVal = dist[pQueue[currInd]];
    parentVal = dist[pQueue[parentInd]];
  }
};

const retrieve = (pQueue, dist) => {
  swap(pQueue, 0, pQueue.length - 1);
  const val = pQueue.pop();
  let currInd = 0;
  let currVal = dist[pQueue[currInd]];
  let childOne = currInd * 2;
  let childTwo = childOne + 1;
  let oneVal = dist[pQueue[childOne]];
  let twoVal = dist[pQueue[childTwo]];

  while(childOne < pQueue.length) {
    if(oneVal > currVal  && twoVal > currVal) {
      break;
    }
    if(oneVal > twoVal) {
      swap(pQueue, childTwo, currInd);
      currInd = childTwo;
    } else {
      swap(pQueue, childOne, currInd);
      currInd = childOne;
    }
    childOne = currInd * 2;
    childTwo = childOne + 1;
    currVal = dist[pQueue[currInd]];
    oneVal = dist[pQueue[childOne]];
    twoVal = dist[pQueue[childTwo]];
  }
  return val;
};


const djikstra = (start, end) => {
  /* Tables to keep track of each nodes' shortest path and previous node */
  const dist = {};
  const prev = {};
  const visited = {};
  const pQueue = [];

  dist[start] = 0;
  dist[prev] = null;

  pQueue.push(start.name);
  while(pQueue.length !== 0) {
    const node = retrieve(pQueue, dist);
    node.neighbors.forEach((neighbor, index) => {
      if(visited[neighbor.name]) {
        return;
      }

      if(dist[neighbor.name] === undefined) {
        dist[neighbor.name] = Infinity;
      }

      const alt = dist[node.name] + node.paths[index];
      if(alt < dist[neighbor.name]) {
        dist[neighbor.name] = alt;
        prev[neighbor.name] = node.name;
      }
      insert(pQueue, neighbor.name, dist);
    });
    visited[node.name] === true;
  }
  return prev[end.name];
};

/* Tests */
const a = [0, 1, 2, 3, 4]
swap(a, 3, 1);
console.log(a); // [ 0, 3, 2, 1, 4 ]

const names = ['Apples', 'Butters', 'Charlie', 'Delta', 'Echo', 'Foxtrot']
const dist = {
  'Apples': 3,
  'Butters': 6,
  'Charlie': 8,
  'Delta': 10,
  'Echo': 13,
  'Foxtrot': 15,
  'Henry': 5
}
insert(names, 'Henry', dist);
console.log(names.map(name => dist[name])); //[ 3, 6, 5, 10, 13, 15, 8 ]

retrieve(names, dist);
console.log(names.map(name => dist[name]));
retrieve(names, dist);
console.log(names.map(name => dist[name]));
retrieve(names, dist);
console.log(names.map(name => dist[name]));


