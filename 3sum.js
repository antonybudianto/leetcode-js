const pushCheck = (ii, jj, kk, M, A) => {
    const aSorted=[ii, jj, kk].sort((a, b) => a - b)
    const sorted = aSorted.join('')
    const kSort = 'k' + sorted
    if (!M[kSort]) {
        M[kSort] = aSorted
        A.push(M[kSort])
    }
}

var threeSum = function(nums) {
    const M = {}
    const A = []
    const N = nums.length
    
    if (N < 3) {
        return []
    }
    
    for(let i = 0; i < N; i++) {
        M[nums[i]] = M[nums[i]] || 0
        M[nums[i]]++
    }
    
    const Mkeys = Object.keys(M)

    for(let i = 0; i < N; i++) {
        let abs = Math.abs(nums[i])
        if (nums[i] === 0) {
            if (M[0] >= 3) {
                pushCheck(0,0,0,M,A)
            }
        }
        else if(nums[i] < 0) {
            if (abs % 2 === 0 && M[abs/2] > 1) {
                pushCheck(abs/2, abs/2, nums[i], M, A)
            }
            if (M[nums[i]] > 1 && M[abs+abs]) {
                pushCheck(nums[i], nums[i], abs+abs, M, A)
            }
            if (M[0] && M[abs]) {
                pushCheck(nums[i], 0, abs, M, A)
            }
        }

        Mkeys.forEach((k, idx) => {
            let kk = parseInt(k, 10)
            if (kk === nums[i] && M[kk] < 2) {
                return
            }
            let add = nums[i] + kk
            if (add === 0) {
                return
            }
            if (-add === nums[i] && M[-add] < 2) {
                return
            }
            if (-add === kk && M[-add] < 2) {
                return
            }
            if (M[-add] && (-add + nums[i] + kk === 0)) {
                pushCheck(-add, nums[i], kk, M, A)
            }
        })
    }
    
    return A
};
