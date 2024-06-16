/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let c = 0;
  let y = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val && i < y) {
      c++;
      while (nums[i] === nums[y] && y > i) {
        y--;
      }

      const z = nums[i];
      nums[i] = nums[y];
      nums[y] = val;
    }
  }
  c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      c++;
    }
  }

  return c;
};
