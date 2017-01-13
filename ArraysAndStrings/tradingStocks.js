// The front-page problem for interview cake

// Suppose we had access to yesterday's stock prices as a list where:
// 1) the indices are the time in minutes past the trade opening time which was 9:30 AM local time
// 2) the values are the price in dollars of Apple stock at that time

// So if the stock is $500 at 10:30 AM -- stockPrices[60] = 500
// Write an efficient function that takes  stockPrices and return the best profit I could have made
// from one purchase and one sale of Apple stock yesterday.

// Example: 
// stockPrices = [10, 7, 5, 8, 11, 9]
// getMaxProfit(stockPrices) -> 6 (buying for $5 and selling for $11)

// No 'shortening' -- you must buy before you sell. You may not buy and sell in the same
// time step (at least 1 minute must pass).

// [Brute force solution] -- O(n^2) where for each element you check every other
// element ahead of it for the highest sale value. Every possible pair is checked until
// you have the highest.
// const getMaxProfit = (prices) => {
//   let largest = 0;
//   for(var i = 0; i < prices.length; i++) {
//     for(var j = i + 1; j < prices.length; j++) {
//       largest = Math.max(largest, prices[j] - prices[i]);
//     }
//   }
//   return largest;
// };

// A more efficient solution
// Traverse the list alternating between finding the contiguous lowest, and contiguous highest
const getMaxProfit = (prices) => {
  let largest = 0;
  let flag = true;
  let low = prices[0];
  let high = prices[0];
  // Edge case
  if(prices.length <= 1) {
    return 0;
  }

  for(var i = 1; i < prices.length; i++) {
    if(flag && prices[i] > prices[i-1]) {
      low = prices[i-1];
      high = prices[i];
      largest = Math.max(largest, high - low);
      
      flag = !flag;
      continue;
    }

    if(!flag && prices[i] < prices[i-1]) {
      high = prices[i-1];
      largest = Math.max(largest, high - low);

      low = prices[i];
      flag = !flag;
      continue;
    }
  }
  return largest;
};

// Tests:
console.log(getMaxProfit([10, 7, 5, 8 , 11, 9]));
console.log(getMaxProfit([19, 21, 22, 28, 18, 15, 20, 15]));
console.log(getMaxProfit([10, 7, 5, 8 , 3, 9, 1, 11]));
