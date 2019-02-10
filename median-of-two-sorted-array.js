/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [];
  while (nums1.length && nums2.length) {
    let pick = nums1[0] < nums2[0] ? nums1 : nums2;
    arr.push(pick[0]);
    pick.shift();
  }
  while (nums1.length) {
    arr.push(nums1[0]);
    nums1.shift();
  }
  while (nums2.length) {
    arr.push(nums2[0]);
    nums2.shift();
  }
  let len = arr.length;
  let med = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (arr[med] + arr[med - 1]) / 2;
  }
  return arr[med];
};
