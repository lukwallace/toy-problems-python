// Write code to remove dups from an unsroted linked list

// // Custom logging function for Node, toString makes this useless
// (function() {
//   const oldLog = console.log;
//   console.log = function(...args) {
//     if(args[0] instanceof Node) {
//       oldLog.apply(console, ['Yup']);
//     }
//     oldLog.apply(console, args);
//   };
// })();


// Basic linked list implementation
const Node = function (value) {
  this.val = value;
  this.next = null;
};

Node.prototype.toString = function() {
  return '(' + this.val + ')';
};

const List = function() {
  this.head = null;
  this.tail = null;
};

List.prototype.push = function(value) {
  const temp = new Node(value);
  if(!this.head) {
    this.head = temp;
    this.tail = temp;
  } else {
    this.tail.next = temp;
    this.tail = temp;
  }
};

List.prototype.toString = function() {
  let res = '';
  let iter = this.head;
  while(iter.next !== null) {
    res += iter + ' -> '
    iter = iter.next;
  }
  return res += iter;
};

// // Some simple tests
// const n = new Node('wat');
// console.log('' + n);

// const l = new List();
// l.push('wat');
// l.push('is');
// l.push('going on');
// console.log('' + l);

module.exports = List
