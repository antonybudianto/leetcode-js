/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let c = 0;
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    if (target === nums[i]) {
      return i;
    } else if (nums[i] > target) {
      c = i;
      break;
    }
  }
  if (c === 0) {
    if (target > nums[N - 1]) return N;
    else {
      return 0;
    }
  }
  return c;
};
