// Runtime: 84 ms, faster than 6.48% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 35.1 MB, less than 43.75% of JavaScript online submissions for Longest Common Prefix.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let str = '';
  let N = strs.length;

  let j = 0;
  let count;

  if (N === 0) return '';
  if (N === 1) return strs[0];

  while (true) {
    str = strs[0][j];
    if (str === undefined) {
      break;
    }
    count = 1;
    for (let i = 1; i < N; i++) {
      if (str === '' || strs[i] === '') {
        return '';
      }

      if (strs[i][j] === str) {
        count++;
      }
    }
    if (count !== N) {
      if (j === 0) return '';
      break;
    }
    j++;
  }
  return strs[0].substring(0, j);
};
