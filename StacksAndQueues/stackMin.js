// How would you design a stack which, in addition to push and pop, has a function which returns the minimum element? Push, pop, and min should all operate in O(1) time

const minStack = function() {
  this.stack = [];
  this.minStack = [];
  // this.length = 0;
};

minStack.prototype.min = function () {
  if(this.minStack.length === 0) {
    return undefined;
  }
  return this.minStack[this.minStack.length - 1];
};

minStack.prototype.push = function (value) {
  this.stack.push(value);
  const currMin = this.min();
  if(currMin === undefined || currMin >= value) {
    this.minStack.push(value);
  }
};

minStack.prototype.pop = function () {
  const top = this.stack.pop();
  const currMin = this.min();
  if(top === currMin) {
    this.minStack.pop();
  }
  return top;
};

const ms = new minStack();
ms.push(4);
ms.push(5);
ms.push(6);
ms.push(1);
ms.push(2);
ms.push(3);
ms.push(0);
console.log(ms.minStack);
console.log(ms.min());



