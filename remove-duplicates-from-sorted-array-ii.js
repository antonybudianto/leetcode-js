/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      if (count < 2) {
        count++
      } else {
        nums.splice(i, 1)
        i--
      }
    } else {
      count = 1
    }
  }
}
