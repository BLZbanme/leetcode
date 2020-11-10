function findRotateSteps1(ring: string, key: string): number {
    const N = ring.length;
    const M = key.length;
    
    const dp: Array<Array<{index: number, step: number}>> = Array(M).fill(0).map(e => []);

    let map = new Map();
    for (let i = 0; i < N; i++) {
        let tmp = map.get(ring[i])
        if (tmp) {
            tmp.push(i);
        }
        else {
            map.set(ring[i], [i]);
        }
    }

    let now = map.get(ring[0]);
    for (let e of now) {
        dp[0].push({
            index: e,
            step: Math.min(e, N - e)
        })
    }
    for (let i = 1; i < M; i++) {
        let pre = dp[i - 1];
        let now = map.get(key[i]);
        for (let e of now) {
            for (let preItem of pre) {
                let theIndex = preItem.index;
                let stepDiff = Infinity;
                for (let nowItem of now) {
                    if (theIndex > nowItem) {
                        stepDiff = Math.min(stepDiff, theIndex - nowItem, nowItem + N - theIndex);
                    }
                    else {
                        stepDiff = Math.min(stepDiff, nowItem - theIndex, theIndex + N - nowItem);
                    }    
                }
                
                dp[i].push({
                    index: e,
                    step: preItem.step + stepDiff
                })
            }
        }
    }
    return Math.min(...dp[M - 1].map(e => e.step)) + M
};

function findRotateSteps(ring: string, key: string): number {
    const M = ring.length;
    const N = key.length;
    const map = new Map();
    for (let i = 0; i < M; i++) {
        let tmp = map.get(ring[i])
        if (tmp) {
            tmp.push(i);
        }
        else {
            map.set(ring[i], [i]);
        }
    }
    const dp: Array<Array<number>> = Array(N).fill(0).map(e => Array(M).fill(Infinity));
    let first = map.get(key[0]);
    for (let i of first) {
        dp[0][i] = Math.min(i, M - i) + 1;
    }
    for (let i = 1; i < N; i++) {
        for (const j of map.get(key[i])) {
            for (const k of map.get(key[i - 1])) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), M - Math.abs(j - k)) + 1)
            }
        }
    }
    return Math.min(...dp[N - 1])
}

console.log(findRotateSteps('godding', 'godding')) //13
console.log(findRotateSteps('godding', 'gd')) //4