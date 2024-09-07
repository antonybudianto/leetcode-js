// https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const N = nums.length
    let largest = 1
    const hash = {}
    for(let i=0;i<N;i++) {
        hash[nums[i]] = true
        largest = Math.max(largest, nums[i])
    }
    for(let i=0;i<largest;i++) {
        if (!hash[i+1]) {
            return i+1
        }
        if (i === largest-1) {
            return largest+1
        }
    }
};
