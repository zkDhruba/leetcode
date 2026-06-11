const prices = [2, 4, 1];

var maxProfit = function (prices) {
  const arrLen = prices.length;
  let lowest = prices[0];
  for (i = 0; i < arrLen; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
    }
  }
  const lowestInd = prices.indexOf(lowest);
  let highestAfterLowest = lowest;

  for (i = lowestInd + 1; i < arrLen; i++) {
    console.log(prices[i]);

    if (prices[i] > highestAfterLowest) {
      highestAfterLowest = prices[i];
    }
  }

  console.log(lowest, lowestInd, highestAfterLowest);

  //   return highestAfterLowest - lowest;
};

maxProfit(prices);
