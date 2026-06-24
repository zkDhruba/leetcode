const nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
  const majorityNumber = nums.length / 2;
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > majorityNumber) {
      console.log(num);

      return num;
    }
  }
};

majorityElement(nums);
