/**
 * @param {string} s
 * @return {number}
 */
const MAP_SYM = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

var romanToInt = function(s) {
  let len = s.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    let s1 = s[i];
    let s2 = s[i] + (s[i + 1] || '');
    let v1 = MAP_SYM[s1];
    let v2 = MAP_SYM[s2];
    if (v2 !== undefined) {
      i++;
    }
    res += v2 || v1;
  }
  return res;
};
