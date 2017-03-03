/* 
Implement an algorithm to print all valid (e.g. properly open and closed) combinations of n pairs of parentheses
Example:
Input: 3,
Ouput: ((())), (()()), (())(), ()(()), ()()()
 */

const parens = (n) => {
  const res = [];
  const parens_helper = (pocket='', open=n, close=n) => {
    if(pocket.length === 2*n) {
      res.push(pocket);
      return;
    }
    if(open > 0) {
      parens_helper(pocket.concat('('), open-1, close);
    }
    if(close > open) {
      parens_helper(pocket.concat(')'), open, close-1);
    }
  };
  parens_helper();
  return res;
};

console.log(parens(4));