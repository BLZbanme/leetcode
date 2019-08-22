/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const N = gas.length;
    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = 0; j < N; j++) {
            let realIndex = (i + j) % N;
            sum += gas[realIndex] - cost[realIndex];
            if (sum < 0) {
                break;
            }
        }
        if (sum < 0) {
            continue;
        }
        return i;
    }
    return -1;
};

var canCompleteCircuit = function(gas, cost) {
    const N = gas.length;
    let dpOne = new Array(N);
    dpOne[0] = cost[0] - gas[0];
    let dpTwo = new Array(N);
    dpTwo[N - 1] = gas[N - 1] - cost[N - 1];
    debugger
    for (let i = 1; i < N; i++) {
        if (dpOne[i - 1] < 0) {
            dpOne[i] = dpOne[i - 1] + cost[i] - gas[i]; 
        }
        else {
            dpOne[i] = dpOne[i - 1] + (gas[i] < cost[i] ? cost[i] - gas[i] : 0); 
        }
        dpTwo[N - 1 - i] = dpTwo[N - i] + gas[N - i - 1] - cost[N - i - 1];
    }
    debugger
    let noZeroIndex = 0;
    for (let i = 0; i < N; i++) {
        if (dpOne[i] >= 0) {
            noZeroIndex = i;
            break;
        }
    }
    let tmp = noZeroIndex !== 0 ? dpOne[noZeroIndex - 1] : 0;
    for (let i = N - 1; i > 0; i--) {
        if (dpTwo[i] - tmp >= dpOne[i - 1] && dpTwo[i] >= 0) {
            return i;
        }
    }

    return -1;
}

var canCompleteCircuit = function(gas, cost) {
    let sumGas = 0;
    let sumCost = 0;
    let start = 0;
    let tank = 0;
    for (let i = 0; i < gas.length; i++) {
        sumGas += gas[i];
        sumCost += cost[i];
        tank += gas[i] - cost[i];
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }
    if (sumGas < sumCost) {
        return -1;
    }
    else {
        return start;
    }
}

console.log(canCompleteCircuit([4,5,2,6,5,3],[3,2,7,3,2,9]))

console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))

console.log(canCompleteCircuit([2,3,4], [3,4,3]))

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))