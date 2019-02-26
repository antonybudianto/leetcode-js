/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let len = 1;
   for (let i = 0; i < nums.length - 1; i++) {
     if (nums[i] === nums[i+1]) {
       nums.splice(i, 1);
       i--;
     }
   }
};
