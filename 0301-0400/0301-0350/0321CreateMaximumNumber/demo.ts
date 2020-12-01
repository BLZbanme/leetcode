function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    const M = nums1.length;
    const N = nums2.length;
    const maxSubsequence = Array(k).fill(0);
    let start = Math.max(0, k - N);
    let end = Math.min(k, M);
    for (let i = start; i <= end; i++) {
        const sub1 = createMaxSubsequence(nums1, i);
        const sub2 = createMaxSubsequence(nums2, k - i);
        const curMaxSubSequence = merge(sub1, sub2);
        if (compare(curMaxSubSequence, 0, maxSubsequence, 0) > 0) {
            maxSubsequence.splice(0, k, ...curMaxSubSequence);
        }
    }
    return maxSubsequence;
};
const createMaxSubsequence = (nums: Array<number>, k: number) => {
    const length = nums.length;
    const stack = Array(k).fill(0);
    let top = -1;
    let remain = length - k;
    for (let i = 0; i < length; i++) {
        const num = nums[i];
        while (top >= 0 && stack[top] < num && remain > 0) {
            top--;
            remain--;
        }
        if (top < k - 1) {
            stack[++top] = num;
        }
        else {
            remain--;
        }
    }
    return stack;
}

const merge = (sub1: Array<number>, sub2: Array<number>) => {
    const x = sub1.length;
    const y = sub2.length;
    if (!x) {
        return sub2;
    }
    if (!y) {
        return sub1;
    }
    const mergeLength = x + y;
    const merged = Array(mergeLength).fill(0);
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < mergeLength; i++) {
        if (compare(sub1, index1, sub2, index2) > 0) {
            merged[i] = sub1[index1++];
        }
        else {
            merged[i] = sub2[index2++];
        }       
    }
    return merged;
}

const compare = (sub1: Array<number>, index1: number, sub2: Array<number>, index2: number) => {
    const x = sub1.length;
    const y = sub2.length;
    while (index1 < x && index2 < y) {
        const diff = sub1[index1] - sub2[index2];
        if (diff) {
            return diff;
        }
        index1++;
        index2++;
    }
    return (x - index1) - (y - index2);
}