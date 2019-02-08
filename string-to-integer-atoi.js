/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2147483648;

var myAtoi = function(str) {
  let val = parseInt(str);
  let absVal = Math.abs(val);
  if (isNaN(val) || val === 0) {
    return 0;
  }

  if (absVal >= INT_MAX) {
    let sign = Math.sign(val);
    val = sign * INT_MAX - (sign === -1 ? 0 : 1);
  }
  return val;
};
