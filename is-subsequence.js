/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let cursor = 0
    for (let i=0; i < t.length; i++) {
        const cc = s[cursor]
        const c = t[i]
        if (c === cc) {
            cursor++
        }
    }
    return cursor === s.length
};
