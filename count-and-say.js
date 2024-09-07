// https://leetcode.com/problems/count-and-say/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function rle(c) {
        const mapTmp = {}
        const s = c + ''
        const N = s.length

        if (c===1) {
            return '1'
        }
       
        let append=''
        let lastChar=s[0]
        let lastCt = 0
        for(let i=0;i<N;i++) {
            if (lastChar === s[i]) {
                lastCt++
            } else {
                append += lastCt+lastChar
                lastCt = 1
                lastChar = s[i]
            }
            
            if (i===N-1) {
                append += lastCt+lastChar
            }
        }
        return append
    }

    let tmp=''
    if (n===1) {
        return '1'
    }
    for(let i=0;i<n;i++) {
        tmp = rle(tmp ? tmp : 1)
    }
    
    return tmp
};
