// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure.

// Here we're defining our stack as just an array with restricted methods.
// Start: 7:21 PM

// Example [4, 5, 6, 1, 2 ,3] => [6, 5, 4, 3, 2, 1]
// Where the right end is the top of the stack and left end is the bottom.
const sortStack = (stack) => {
  const temp = [];
  let item, tempPeek;
  while(stack.length > 0) {
    item = stack.pop();
    tempPeek = temp[temp.length - 1];
    if(item >= tempPeek) {
      // push increasing
      temp.push(item);
    } else {
      // push in reverse until you can fit top in
      while(item < tempPeek && temp.length > 0) {
        stack.push(temp.pop());
        tempPeek = temp[temp.length -1];
      }
      temp.push(item);
    }
  }

  while(temp.length > 0) {
    stack.push(temp.pop());
  }
};

// Test
const stack = [4, 5, 6, 1, 2, 3];
sortStack(stack);
console.log(stack);