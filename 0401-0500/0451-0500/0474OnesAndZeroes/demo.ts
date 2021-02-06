function findMaxForm(strs: string[], m: number, n: number): number {
    const dp = Array(m + 1).fill(0).map(e => Array(n + 1).fill(0));

    const countZeroAndOne = (str: string): Array<number> => {
        const result = [0, 0]
        for (let i = 0; i < str.length; i++) {
            str[i] === '0' ? result[0]++ : result[1]++;
        }
        return result;
    }

    for (let s of strs) {
        const [zero, one] = countZeroAndOne(s);
        for (let i = m; i >= zero; i--) {
            for (let j = n; j >= one; j--) {
                dp[i][j] = Math.max(1 + dp[i - zero][j - one], dp[i][j]);
            }
        }
    }
    return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)); //4