/* 
On old cell phones, users typed on a numeric keypad and the phone would provide a list of words that matched these numbers. Each digit mapped to a set of 0-4 letters. Implment an algoirthm to return a list of matching words, given a sequence of digits. You are provided a list of valid words (provided in whatever data structure you'd like). The mapping is shown below:

1
2: abc
3: def
4: ghi
5: jki
6: mno
7: pqrs
8: tuv
9: wxyz
0:

Example:
Input: 8733
Output: tree, used

Assume the list of words is a prefix trie
*/

/* Brute force method */
const keypad = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jki',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

const dictionary = {
  'ad': true,
  'be': true
};

/* Generate all possible combinations and check if its a correct word */
let t9 = (numSeq, index=0) => {
  if(index === numSeq.length) {
    return [];
  }

  if(index === numSeq.length - 1) {
    return keypad[numSeq[index]].split('');
  }

  const res = [];
  const pre = t9(numSeq, index+1);
  const num = numSeq.charAt(index);
  const letterPool = keypad[num];
  for(let j = 0; j < letterPool.length; j++) {
    const letter = letterPool.charAt(j);
    pre.forEach(suffix => {
      const word = letter + suffix;
 
      if(index === 0 ) {
        // Compare to list of real words
        if(dictionary[word]) {
          res.push(word);
        }
      } else {
        res.push(word);
      }
    });
  }
  return res;
};

// console.log(t9('23'));

/* To make it more efficient, consider preprocessing techniques with the dictionary. */
/* Simple Trie: one letter per node. */
const trie = {
  letter: '',
  next: {},
  isWord: false
};

const addWord = (trie, word) => {
  let iter = trie;
  let wordIndex = 0;
  let letter = word.charAt(wordIndex);

  // while there is still a node to traverse down in our trie
  while(iter.next[letter] && wordIndex < word.length) {
    iter = iter.next[letter];
    wordIndex++;
    letter = word.charAt(wordIndex);
  }

  // The word is already in our trie
  if(wordIndex === word.length) {
    iter.isWord = true;
  }

  //Make the rest of the trie with wordIndex and word onwards
  while(wordIndex < word.length) {
    const node = {
      letter,
      next: {},
      isWord: wordIndex + 1 === word.length ? true : false
    }

    iter.next[letter] = node
    iter = node;
    wordIndex++;
    letter = word.charAt(wordIndex);
  }
};

// addWord(trie, 'apple');
// addWord(trie, 'applet');
// addWord(trie, 'app');
// addWord(trie, 'pallet');

const traverse = (node, word='', count=0) => {
  if(node.isWord || count === 50) {
    console.log(word + node.letter);
  }

  Object.keys(node.next).forEach(letter => {
    traverse(node.next[letter], word + node.letter, count+1);
  });
};

// traverse(trie);



/* Cleaner t9 */
t9 = (numSeq, index=0, word='') => {
  if(index >= numSeq.length) {
    console.log(word);
    return;
  }

  const num = numSeq.charAt(index);
  const letterPool = keypad[num];
  for(let i = 0; i < letterPool.length; i++) {
    const letter = letterPool[i];
    t9(numSeq, index + 1, word + letter);
  }
};

t9('23');


