var duplicate = function (nums) {
  const map = new Map();
  for (i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    if (map.has(currentValue)) {
      return true;
    } else {
      map.set(currentValue, i);
    }
  }

  return false;
};
