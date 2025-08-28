/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const N = nums.length;
  const M = {};
  let A = null,
    B = null;
  for (let i = 0; i < N; i++) {
    if (!M[nums[i]]) {
      M[nums[i]] = [i, null];
    } else {
      const f1 = M[nums[i]][0];
      const f2 = M[nums[i]][1];
      if (Math.abs(f1 - f2) <= k || f2 === null) {
        M[nums[i]][1] = f2 ? Math.min(i, f2) : i;
      } else {
        M[nums[i]][0] = f2;
        M[nums[i]][1] = i;
      }
    }
  }
  const keys = Object.keys(M);
  for (let i = 0; i < keys.length; i++) {
    const P = M[keys[i]];
    const A = P[0];
    const B = P[1];
    if (A !== null && B !== null) {
      const dup = Math.abs(A - B) <= k;
      if (dup) {
        return dup;
      }
    }
  }
  return false;
};
