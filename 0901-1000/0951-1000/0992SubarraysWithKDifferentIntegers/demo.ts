function subarraysWithKDistinct1(A: number[], K: number): number {
    const n = A.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        const set = new Set();
        for (let j = i; j < n; j++) {
            set.add(A[j]);
            if (set.size === K) {
                result++;
            }
            if (set.size > K) {
                break;
            }
        }
    }
    return result;
};

function subarraysWithKDistinct(A: number[], K: number): number {
    const n = A.length;

    const helper = (k: number): number => {
        let left = 0;
        const map = new Map();
        let result = 0;
        for (let right = 0; right < n; right++) {
            map.set(A[right], (map.get(A[right]) || 0) + 1);
            if (map.size <= k) {
                result += right - left + 1;
            }
            else {
                let tmp = map.get(A[left]);
                if (tmp > 1) {
                    map.set(A[left], tmp - 1);
                }
                else {
                    map.delete(A[left]);
                }
                left++;
            }
        }
        return result;
    }

    return helper(K) - helper(K - 1);
};

console.log(subarraysWithKDistinct([1,2,1,2,3], 2))//7