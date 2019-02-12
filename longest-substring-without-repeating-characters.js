/**
 * @param {string} s
 * @return {number}
 */

function lengthOfLongestSubstring(str) {
  let n = str.length;
  let ans = 0;
  let map = {};
  for (let j = 0, i = 0; j < n; j++) {
    if (map[str[j]]) {
      i = Math.max(i, map[str[j]]);
    }
    ans = Math.max(ans, j - i + 1);
    map[str[j]] = j + 1;
  }
  return ans;
}
