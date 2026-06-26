const nums = [3, 2, 3];

var majorityElement = function (nums) {
  let candidate = 0;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // console.log(candidate);
  return candidate;
};

majorityElement(nums);
