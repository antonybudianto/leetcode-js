/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let maxInt = Math.pow(2, 31) - 1;
  let sign = x < 0 ? -1 : 1;
  let res = parseInt(
    String(x)
      .split('')
      .reverse()
      .join('')
  );
  if (res > maxInt) return 0;
  return sign * res;
};
