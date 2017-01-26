// Create a queue with two stacks

const Queue = function() {
  this.in = [];
  this.out = [];
};

Queue.prototype.enqueue = function(value) {
  this.in.push(value);
};

Queue.prototype.dequeue = function(){
  if(this.in.length > 0 && this.out.length === 0) {
    const len = this.in.length;
    for(let i = 0; i < len; i++) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue());
q.enqueue(6);
console.log(q.dequeue());
q.enqueue(7);
console.log(q.dequeue());