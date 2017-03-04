/* Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents */

const coins = (n) => {
  let count = 0;
  const denom = [25, 10, 5, 1];
  const coins_helper = (n, curr=0, pocket='') => {
    /*  faulty ends */ 
    if(n < 0) {
      return;
    }

    /*  counting by 1's */
    if(denom[curr] === 1) {
      console.log(pocket.concat('1*'));
      count++;
      return;
    } 

    /*  solution found -- but we don't return b/c we want to check next coin denom too */
    if(n - denom[curr] === 0) {
      console.log(pocket.concat(denom[curr]));
      count++;
    } else {
      coins_helper(n - denom[curr], curr, pocket.concat(denom[curr] + ','));
    }
    
    /* we also want to check what it looks like if we skip the denom */
    coins_helper(n, curr+1, pocket);
  }
  coins_helper(n);
  return count;
};

coins(25);

