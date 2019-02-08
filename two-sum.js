/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  let N = nums.length;
  for (let i = 0; i < N; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < N; i++) {
    let pair = target - nums[i];
    if (map[pair]) {
      return [i, map[pair]];
    }
  }
  return -1;
};
