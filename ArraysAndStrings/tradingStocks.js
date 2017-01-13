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

// A more efficient solution -- O(n)
// Traverse the list alternating between finding the contiguous lowest, and contiguous highest
const getMaxProfit = (prices) => {
  let largest = 0;
  let flag = true;
  let low;

  // Edge case
  if(prices.length <= 1) {
    return 0;
  }

  let prev = prices[0];
  for(let i = 1; i < prices.length; i++) {
    // Search for end of decreasing sequence
    if(flag && prices[i] > prev) {
      flag = !flag;
      largest = Math.max(largest, prices[i] - prev);
      low = prev;
    }
    // Search for end of increasing sequence OR if the sequence ends
    if(!flag && ((prices[i] < prev)|| prices[i+1] === undefined)) {
      flag = !flag;
      largest = Math.max(largest, prev - low);
      low = prices[i]
    }
    prev = prices[i];
  }
  return largest;
};

// Tests:
console.log(getMaxProfit([4, 5, 6, 6 , 6, 6])) // 2
console.log(getMaxProfit([10, 7, 5, 8 , 11, 9])); // 6
console.log(getMaxProfit([4, 5, 2, 2, 1, 1, 8, 4, 4])) // 7
console.log(getMaxProfit([19, 21, 22, 28, 18, 15, 20, 15])); // 9 
console.log(getMaxProfit([10, 7, 5, 8 , 3, 9, 1, 11])); // 10


