/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const M = {};
  let ops = 0;
  for (let i = 0; i < nums.length; i++) {
    M[nums[i]] = (M[nums[i]] || 0) + 1;
  }
  for (let i = 0; i < nums.length; i++) {
    const c = k - nums[i];
    let min = 0;
    if (c === nums[i]) {
      min = 1;
    }

    if (M[c] > min && M[nums[i]] > min) {
      ops++;
      M[c]--;
      M[nums[i]]--;
    }
  }
  return ops;
};
