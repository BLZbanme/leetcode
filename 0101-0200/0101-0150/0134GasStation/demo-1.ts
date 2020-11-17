function canCompleteCircuit(gas: number[], cost: number[]): number {
    const N = gas.length;
    
    let i = 0;
    while (i < N) {
        let sumGas = 0;
        let sumCost = 0;
        let cnt = 0;
        while (cnt < N) {
            let j = (i + cnt) % N;
            sumGas += gas[j];
            sumCost += cost[j];
            if (sumCost > sumGas) {
                break;
            }
            cnt++;
        }
        if (cnt === N) {
            return i;
        }
        else {
            i = i + cnt + 1;
        }
    }
    return -1;
};