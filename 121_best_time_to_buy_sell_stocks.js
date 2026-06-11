const prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  const arrLen = prices.length;
  let lowest = prices[0];
  let profit = 0;
  for (i = 0; i < arrLen; i++) {
    if (prices[i] - lowest > profit) {
      profit = prices[i] - lowest;
    }
  }
  console.log(profit);

  //   return highestAfterLowest - lowest;
};

maxProfit(prices);
