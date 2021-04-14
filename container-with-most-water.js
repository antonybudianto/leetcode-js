/**
 * @param {number[]} height
 * @return {number}
 */

// let max = 0
const traverse = (A, L, R, max) => {
    const w = R - L
    const h = Math.min(A[L], A[R])
    const area = w * h
    max = Math.max(max, area)
    
    if (R - L === 1) {
        return max
    }

    if (A[L] < A[R]) {
        return traverse(A, L+1, R, max)
    } else {
        return traverse(A, L, R-1, max)
    }

    return max
}

var maxArea = function(height) {
    let N = height.length
    let L = 0
    let R = N-1
    
    const max = traverse(height, L, R, 0)
    return max
};
