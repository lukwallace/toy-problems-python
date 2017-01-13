const List = require('./List.js');

// Write code to remove dups from an unsroted linked list
const removeDup = (list) => {
  let iter = list.head;
  let prev = null;
  const mem = {};
  
  while(iter !== null) {
    if(mem[iter.val] !== undefined) {
      const next = iter.next;
      prev.next = next;
      iter = next;
      continue;
    }

    mem[iter.val] = true;
    prev = iter;
    iter = iter.next;
  }
};

// Tests
const l = new List();
l.push('a');
l.push('b');
l.push('a');
l.push('c');
l.push('d');
l.push('a');
console.log(''+l);
removeDup(l);
console.log(''+l);


