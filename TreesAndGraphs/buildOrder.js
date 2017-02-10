// Special constraints: pretend lke no IDE. No build system usage
// You are given a lists of projects and a list of dependencies (which is a list of pairs of projects where the second project is dependent on the first project). All of the projects dependies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.

// Example input:
// projects: ['a', 'b', 'c', 'd', 'e', 'f']
// dependencies: [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]

 // solution: ['f', 'e', 'a', 'b', 'd', 'c']

 const buildOrder = (projects, dependencies) => {
  //create an adjaceny mapping of the projects
  const graph = {};
  projects.forEach((project) => {
    graph[project] = { dependsOn: [], incoming: 0,  };
  });

  // parse dependencies, define an edge on the graph from A to B
  // represent a dependency from A to B. I.e. A depends on B.
  dependencies.forEach((dependency) => {
    // dependency (B, A) means B has a edge going to it, and we cannot start on it
    const one = dependency[0];
    const two = dependency[1];
    graph[two].dependsOn.push(one);
    graph[one].incoming++;
  });

  const res = [];
  const queue = [];
  for(let name in graph) {
    let node = graph[name];
    if(node.incoming === 0) {
      queue.push(name);
    }
  }

  while(queue.length > 0) {
    const prereq = queue.shift();
    res.unshift(prereq);
    graph[prereq].dependsOn.forEach((item) => {
      graph[item].incoming--;
      if(graph[item].incoming === 0) {
        queue.push(item);
      }
    })
  }

  return res.length < projects.length ? null : res;
 };

 console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']] ))
 
// Review: 
// Still writing crappy code.
// Need clear thoughts, and faster completion times.

