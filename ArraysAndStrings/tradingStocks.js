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

const getMaxProfit = () => {
  
};