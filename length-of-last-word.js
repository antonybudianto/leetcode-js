/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let x = -1;
  let N = s.length;
  let y = -1;
  for (let i = N - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      if (y === -1) {
        y = i;
      }
      x = i;
    } else {
      if (y !== -1) {
        break;
      }
    }
  }

  if (x >= 0 && y >= 0) {
    return y - x + 1;
  }
  return y - x;
};
