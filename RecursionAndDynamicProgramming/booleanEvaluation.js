/* Given a boolean experession consisting of the symbols 0 (false), 1 (true), & (AND), | (OR), and ^ (XOR), and a desired boolean result value result, implement a function to count the number of ways of parenthesizing the experssion such that it evaluates to result. The expression should be fully parenthesized */

/* Assuming for valid expr always have odd number of char */
const booleanEvaluation = (expr, res, mem={}) => {
  if(mem[expr+res]) {
    return mem[expr+res]
  }

  if(expr.length === 1) {
    return expr[0] == res ? 1 : 0;
  }
  let ways = 0;
  /* for each operator */
  for(let i = 1; i < expr.length; i+=2) {
    const one = expr.slice(0, i);
    const two = expr.slice(i+1);
    const op = expr.charAt(i);

    const totalLeft = booleanEvaluation(one, true, mem) + booleanEvaluation(one, false, mem);
    const totalRight = booleanEvaluation(two, true, mem) + booleanEvaluation(two, false, mem);
    const waystotal = totalRight * totalLeft;
    let waysTrue = 0;

    if(op === '^') {
      waysTrue += booleanEvaluation(one, false, mem) * booleanEvaluation(two, true, mem);
      waysTrue += booleanEvaluation(one, true, mem) * booleanEvaluation(two, false, mem);
    }

    if(op === '|') {
      waysTrue += booleanEvaluation(one, true, mem) * booleanEvaluation(two, true, mem);
      waysTrue += booleanEvaluation(one, true, mem) * booleanEvaluation(two, false, mem);
      waysTrue += booleanEvaluation(one, false, mem) * booleanEvaluation(two, true, mem);
    }

    if(op === '&') {
      waysTrue += booleanEvaluation(one, true, mem) * booleanEvaluation(two, true, mem);
    }

    if(res === true) {
      ways += waysTrue;
    } else {
      ways += waystotal - waysTrue;
    }
  }
  mem[expr+res] = ways;
  return ways;
};


const expr = '1^0|0|1';
console.log('Count:', booleanEvaluation(expr, false));
