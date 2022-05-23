/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const M = {}
    const N = nums.length
    for(let i=0;i<N;i++) {
        M[nums[i]] = i
    }
    
    return M[target] !== undefined ? M[target] : -1
};
