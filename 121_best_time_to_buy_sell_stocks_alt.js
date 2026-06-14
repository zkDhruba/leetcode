const prices = [2, 4, 1];

var maxProfit = function (prices) {
  const arrLen = prices.length;
  let lowest = prices[0];
  let profit = 0;
  for (i = 0; i < arrLen; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    } else {
      profit = Math.max(profit, prices[i] - lowest);
    }
  }

  return profit;
};

maxProfit(prices);
