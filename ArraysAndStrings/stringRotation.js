// Assuming you have a methid isSubstring which checks if one word is a 
// substring of another. Given two strings s1 and s2, write code to check
// if s2 is a rotation of s1 using only one call to isSubstring.

// Assuming isSubstring to be JavaScripts' string.prototype.indexOf function
// Example:
// input: strOne = 'waterbottle', strTwo = 'erbottlewater'
// output: true

// input: strOne = 'waterxwatt', strTwo = 'xwattwater'
// output: true

const stringRotation = (strOne, strTwo) => {
  //Scan through strTwo
  let front = '';
  let back = ''
  let curr = 0;

  for(var i = 0; i < strTwo.length; i++) {
    const letter = strTwo.charAt(i);
    console.log('compare', letter, strOne.charAt(curr));
    if(letter === strOne.charAt(curr)) {
      front += letter;
      curr++;
    } else if(curr !== 0) {
      back += front + letter;
      curr = 0;
      front = '';
    } else {
      back += letter;
    }
  }
  console.log(front, back);
  return (front + back) === strOne;
};


console.log(stringRotation('waterbottle', 'erbottlewat'));
console.log(stringRotation('waterxwatt', 'xwattwater'));