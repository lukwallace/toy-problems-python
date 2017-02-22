// Implement a circular array class that supports an array-like data structure which can be efficiently rotated.
// Bonus points for implementing forEach on it

// Optimal way to do this is just a circular doubly linked list?

const CircularArray = function(arr=[]) {
  this.array = arr;
  this.head = 0;
};

CircularArray.prototype.elemAt = function(index) {
  if(index > this.array.length) {
    return undefined;
  }
  return this.array[(index + this.head) % this.array.length];
};

CircularArray.prototype.rotateLeft = function(steps) {
  for(let i = 0; i < steps; i++) { 
    if(this.head === 0) {
      this.head = this.array.length;
    }
    this.head--;
  }
};

CircularArray.prototype.rotateRight = function(steps) {
  for(let i = 0; i < steps; i++) { 
    if(this.head === this.array.length - 1) {
      this.head = -1; 
    }
    this.head++;
  }
};

CircularArray.prototype.push = function(value) {
  if(this.head === 0) {
    this.array.push(value);
  }

  if(this.head === this.array.length - 1) {
    this.array.unshift(value);
  }
  // O(n)
  this.array.splice(this.head, 0, value);
};

CircularArray.prototype.pop = function() {
  if(this.head === 0) {
    return this.array.shift();
  }

  if(this.head === this.array.length - 1) {
    return this.array.pop();
  }
  // O(n)
  return [...this.array.splice(this.head, 1)];
};

const c = new CircularArray([0, 1, 2, 3, 4]);
c.rotateLeft(2);
console.log(c.elemAt(0)); 
c.push(5);
console.log(c.array);