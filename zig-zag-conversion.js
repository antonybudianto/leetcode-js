/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 
// The logic is to assign row index to each letter
var convert = function(s, numRows) {
  const slen = s.length;
  let tmp = 0;
  let sign = 1;
  let idxArr = [];
  let res = [];
  for (let i = 0; i < slen; i++) {
    if (tmp === 0) {
      sign = 1;
    } else if (tmp === numRows - 1) {
      sign = -1;
    }
    idxArr.push(tmp);
    tmp += sign;
    if (tmp > numRows - 1) {
      tmp = 0;
    }
  }
  for (let i = 0; i < slen; i++) {
    let idx = idxArr[i];
    res[idx] = res[idx] || '';
    res[idx] += s[i];
  }
  let str = '';
  for (let i = 0; i < res.length; i++) {
    str += res[i];
  }
  return str;
};
