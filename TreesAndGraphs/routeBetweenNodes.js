// Given a directed graph, design an algorithm to find out whether there is a route between two nodes
// Assume a node is an object with and edges array

const routeBetweenNodes = (A, B) => {
  const queue = [A];
  while(queue.length > 0) {
    let node = queue.shift();
    if(node === B) {
      return true;
    }
    node.edges.forEach((edge) => {
      queue.push(edge);
    });
  }
  return false;
};

// Test 
const Two = { edges: []}
const Four = { edges: []}
const Three = { edges: [Four]}
const One = { edges: [Two, Three]}

console.log(routeBetweenNodes(One, Four)); //true
console.log(routeBetweenNodes(Three, Four)); //true
console.log(routeBetweenNodes(Two, Four)); //false

