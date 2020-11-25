function maximumGap(nums: number[]): number {
    const N = nums.length;
    if (N < 2) {
        return 0;
    }
    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    const d = Math.max(1, Math.floor(maxVal - minVal) / (N - 1));
    const bucketSize = Math.floor((maxVal - minVal) / d) + 1;
    const bucket = Array(bucketSize).fill(0).map(e => Array(2).fill(-1))

    for (let i = 0; i < N; i++) {
        const idx = Math.floor((nums[i] - minVal) / d);
        if (bucket[idx][0] == -1) {
            bucket[idx][0] = bucket[idx][1] = nums[i];
        }
        else {
            bucket[idx][0] = Math.min(bucket[idx][0], nums[i])
            bucket[idx][1] = Math.max(bucket[idx][1], nums[i])
        }
    }

    let ret = 0;
    let prev = -1;
    for (let i = 0; i < bucketSize; i++) {
        if (bucket[i][0] == -1) {
            continue;
        }
        if (prev != -1) {
            ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);
        }
        prev = i;
    }
    return ret;
};