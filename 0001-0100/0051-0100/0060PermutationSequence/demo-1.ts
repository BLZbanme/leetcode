function getPermutation111(n: number, k: number): string | null {
    let set = new Set();
    let count = 1;
    let result: string | null = null;
    const dfs = (arr: Array<number>): void => {
        if (result) {
            return;
        }

        if (arr.length === n) {
            if (count === k) {
                result = arr.join('');
                return;
            }
            count++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if (set.has(i)) continue;
            arr.push(i);
            set.add(i);
            dfs(arr);
            set.delete(i);
            arr.pop();
        }
    }
    dfs([]);

    return result;
};

function getPermutation(n: number, k: number): string {
    const dp: Array<number> = Array(n);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] * i;
    }

    k--;

    const res = [];
    const valid = (Array(n + 1) as any).fill(1);
    for (let i = 1; i <= n; i++) {
        let order = Math.floor(k / dp[n - i]) + 1;
        for (let j = 1; j <= n; j++) {
            order -= valid[j];
            if (order === 0) {
                res.push(j);
                valid[j] = 0;
                break;
            }
        }
        k %= dp[n - i];
    }
    return res.join('');
}

console.log(getPermutation(3, 3));//213
console.log(getPermutation(4, 9));//2314