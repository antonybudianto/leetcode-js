/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const N = digits.length;
  const calc = () => {
    let r = 1; // initially, add +1
    for (let i = N - 1; i >= 0; i--) {
      let add = digits[i] + r;
      if (add > 9) {
        r = 1;
        digits[i] = add % 10;
      } else {
        r = 0;
        digits[i] = add;
      }
    }
    if (r > 0) {
      digits.unshift(1);
    }
    return digits;
  };

  const res = calc();
  return res;
};
