/**
 * @param {number} num
 * @return {string}
 */
const MAP_SYM = [
  'I',
  'IV',
  'V',
  'IX',
  'X',
  'XL',
  'L',
  'XC',
  'C',
  'CD',
  'D',
  'CM',
  'M'
]
const MAP_VAL = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

var intToRoman = function(num) {
  let n = num
  let res = ''
  const len = MAP_SYM.length
  while (n !== 0) {
    for (let i = len - 1; i >= 0; i--) {
      let val = MAP_VAL[i]

      if (val === 1) {
        for (let j = 0; j < n; j++) {
          res += 'I'
        }
        return res
      }

      let div = Math.floor(n / val)

      for (let j = 0; j < div; j++) {
        res += MAP_SYM[i]
      }
      n %= val
    }
  }
}
  
