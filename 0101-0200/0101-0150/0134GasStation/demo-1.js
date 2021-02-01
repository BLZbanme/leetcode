"use strict";
function canCompleteCircuit(gas, cost) {
    var N = gas.length;
    var i = 0;
    while (i < N) {
        var sumGas = 0;
        var sumCost = 0;
        var cnt = 0;
        while (cnt < N) {
            var j = (i + cnt) % N;
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
}
;
