function trap(height: number[]): number {
    let res = 0;
    const N = height.length;
    for (let i = 1; i < N - 1; i++) {
        let maxLeft = 0;
        let maxRight = 0;
        for (let j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j]);
        }

        for (let j = i; j < N; j++) {
            maxRight = Math.max(maxRight, height[j]);
        }
        res += Math.min(maxLeft, maxRight) - height[i];
    }
    return res;
};