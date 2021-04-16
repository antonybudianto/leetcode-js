/**
 * @param {string} s
 * @return {boolean}
 */
const open = { '(': 1, '[': 2, '{': 3 }
const close = { ')': 1, ']': 2, '}': 3 }

var isValid = function(S) {
    const N = S.length
    const stack = []
    for(let i=0;i<N;i++) {
        if (open[S[i]]) {
          stack.unshift(open[S[i]])   
        } else if (close[S[i]]) {
            if (!stack.length) {
                return false
            }
            if (close[S[i]] === stack[0]) {
                stack.shift()
            } else {
                return false
            }
        }
    }
    
    return stack.length === 0
};
