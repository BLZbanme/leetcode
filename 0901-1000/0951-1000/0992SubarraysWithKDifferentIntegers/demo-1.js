var subarraysWithKDistinct = function(A, K) {
    const n = A.length;
    
    const helper = k => {
        const map = new Map();
        let left = 0;
        let count = 0;
        for (let right = 0; right < n; right++) {
            map.set(A[right], (map.get(A[right]) || 0) + 1);
            while (map.size > k) {
                let tmp = map.get(A[left]);
                if (tmp > 1) {
                    map.set(A[left], tmp - 1);
                }
                else {
                    map.delete(A[left]);
                }
                left++;
            }
            count += right - left + 1;
        }
        return count;
    }

    return helper(K) - helper(K - 1);
};