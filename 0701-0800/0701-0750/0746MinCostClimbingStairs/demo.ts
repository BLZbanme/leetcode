function minCostClimbingStairs(cost: number[]): number {
    let p = cost[0];
    let q = cost[1];
    for (let i = 2; i < cost.length; i++) {
        let tmp = q;
        q = Math.min(p, q) + cost[i];
        p = tmp;
    }
    return Math.min(p, q);
};

console.log(minCostClimbingStairs([10, 15, 20])) //15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) //6