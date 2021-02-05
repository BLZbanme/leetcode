function numMovesStonesII1(stones: number[]): number[] {
    stones.sort((a, b) => a - b);
    const n = stones.length;
    let max = stones[n - 1] - stones[0] + 1 - n;
    max -= Math.min(stones[n - 1] - stones[n - 2] - 1, stones[1] - stones[0] - 1);
    let min = max;
    let j = 0;
    for (let i = 0; i < n; i++) {
        while (j + 1 < n && stones[j + 1] - stones[i] + 1 <= n) {
            j++;
        }
        let cost = n - (j - i + 1);
        if (j - i + 1 === n - 1 && stones[j] - stones[i] + 1 === n - 1) {
            cost = 2;
        }
        min = Math.min(cost, min);
    }
    return [min, max];
};

function numMovesStonesII(stones: number[]): number[] {
    stones.sort((a, b) => a - b);
    const n = stones.length;
    let max = stones[n - 1] - stones[0] + 1 - n;
    max -= Math.min(stones[n - 1] - stones[n - 2] - 1, stones[1] - stones[0] - 1);
    let left = 0;
    let min = max;
    let cur = 0;
    for (let right = 0; right < n; right++) {
        if (stones[right] - stones[left] + 1 > n) {
            left++;
        }
        else {
            if (right - left + 1 === n - 1 && stones[right] - stones[left] + 1 === n - 1) {
                min = Math.min(min, 2);
            }
            else {
                cur = Math.max(cur, right - left + 1);
                min = Math.min(min, n - cur)
            }
        }
    }
    return [min, max];
};

console.log(numMovesStonesII([8,7,6,5,2])); //[2, 2]
console.log(numMovesStonesII([7,4,9])); //[1, 2]
console.log(numMovesStonesII([6, 5, 4, 3, 10])); //[2, 3]
console.log(numMovesStonesII([8,7,6,5,10])); //[1, 1]
console.log(numMovesStonesII([100,101,104,102,103])); //[0, 0]
