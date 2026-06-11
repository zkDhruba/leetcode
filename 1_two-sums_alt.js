const nums = [2, 7, 11, 15];
const target = 22;

var twoSum = function (nums, target) {
  const map = new Map();
  const arrLen = nums.length;

  for (let i = 0; i < arrLen; i++) {
    const currentValue = nums[i];
    const complement = target - currentValue;

    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(currentValue, i);
    }
  }
};

console.log(twoSum(nums, target));
