const List = require('./List.js');
// Notes for today: spend at most 20-30 minutes per problem

// Implement a function to check if a linked list is a palindrome
// Reverse the list and see if it matches

const isPalindrome = (list) => {
  const reverse = new List();
  let curr = list.head;
  while(curr !== null) {
    reverse.shift(curr.val);
    curr = curr.next;
  }
  curr = reverse.head;
  let curr2 = list.head;
  while(curr !== null) {
    if(curr.val !== curr2.val) {
      return false;
    }
    curr = curr.next;
    curr2 = curr2.next;
  }
  return true;
};

const l1 = new List();
l1.push(1);
l1.push(2);
l1.push(3);
l1.push(2);
l1.push(1);

const l2 = new List();
l2.push(1);
l2.push(2);
l2.push(3);
l2.push(3);
l2.push(2);
l2.push(1);

const l3 = new List();
l3.push(1);
l3.push(1);
l3.push(3);
l3.push(2);
l3.push(1);

const l4 = new List();
l4.push(1);
l4.push(2);
l4.push(3);
l4.push(4);
l4.push(2);
l4.push(1);

console.log(isPalindrome(l1)); // true
console.log(isPalindrome(l2)); // true
console.log(isPalindrome(l3)); // false
console.log(isPalindrome(l4)); // false