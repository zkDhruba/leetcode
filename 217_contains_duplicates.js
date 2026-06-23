let nums = [1, 2, 3, 1];

var containsDuplicate = function (nums) {
  const arrLen = nums.length;

  for (let i = 0; i < arrLen; i++) {
    for (let j = 0; j < arrLen; j++) {
      if (nums[i] === nums[j]) {
        console.log("true");

        return true;
      } else {
        console.log("false");
        return false;
      }
    }
  }
};

containsDuplicate(nums);
