const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
  const map = new Map();
  const arrLen = nums.length;

  for (i = 0; i < arrLen; i++) {
    const currentNumber = nums[i];

    if (map.has(currentNumber)) {
      return true;
    } else {
      map.set(currentNumber, i);
    }
  }

  return false;
};

console.log(containsDuplicate(nums));
