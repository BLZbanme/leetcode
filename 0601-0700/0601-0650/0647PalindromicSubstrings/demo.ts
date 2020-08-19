const countSubstrings = (s: string): number => {
    const n = s.length;
    let count = n;
    const dp: Array<boolean[]> = Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = (Array(n) as any).fill(false);
        dp[i][i] = true;
    }
    
    for (let j = 1; j < n; j++) {
        for (let i = 0; i + j < n; i++) {
            if (s[i] === s[i + j]) {
                dp[i][i + j] = j === 1 || dp[i + 1][i + j - 1]
            }
            dp[i][i + j] && count++;
        }
    }
    return count;
}

const countSubstrings111 = (s: string): number => {
    const N = s.length;
    let count = 0;
    for (let i = 0; i < 2 * N - 1; i++) {
        let l = i >> 1;
        let r = (i >> 1) + i % 2;
        while (l >= 0 && r < N && s[l] === s[r]) {
            l--;
            r++;
            count++;
        }
    }
    return count;
}