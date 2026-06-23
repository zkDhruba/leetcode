let nums = [3, 2, 4];
let target = 6;

var twoSum = function (nums, target) {
  const arrLength = nums.length;
  let resultArr = [];

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          resultArr.push(i, j);
          return resultArr;
        }
      }
    }
  }
};

twoSum(nums, target);
