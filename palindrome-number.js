/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x < 10) return true
    let reverse = 0
    let tmp = x
    while(tmp !== 0) {
        let a = tmp % 10
        reverse = (reverse * 10) + a
        tmp = Math.floor(tmp / 10)
    }
    return x === reverse
};
