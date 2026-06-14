const prices = [2, 4, 1];

var maxProfit = function (prices) {
  const arrLen = prices.length;
  let lowest = prices[0];
  let profit = 0;
  for (i = 0; i < arrLen; i++) {
    for (j = i; j < arrLen; j++) {
      if (prices[j] - lowest > profit) {
        profit = prices[j] - lowest;
      }
    }
    lowest = prices[i + 1];
  }

  return profit;
};

maxProfit(prices);
