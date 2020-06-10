/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let parentMap = new Map();
    let valueMap = new Map();

    for (let i = 0; i < equations.length; i++) {
        if (!parentMap.has(equations[i][0])) {
            parentMap.set(equations[i][0], equations[i][0]);
        }
        if (!parentMap.has(equations[i][1])) {
            parentMap.set(equations[i][1], equations[i][1]);
        }

        if (!valueMap.has(equations[i][0])) {
            valueMap.set(equations[i][0], 1);
        }
        if (!valueMap.has(equations[i][1])) {
            valueMap.set(equations[i][1], 1);
        }
        union(parentMap, valueMap, equations[i][0], equations[i][1], values[i]);
    }

    const result = [];
    
    for (let i = 0; i < queries.length; i++) {
        let tmp1 = find(parentMap, valueMap, queries[i][0]);
        let tmp2 = find(parentMap, valueMap, queries[i][1]);
        if (!tmp1 || !tmp2) {
            result.push(-1.0);
            continue;
        }
        if (tmp1.index === tmp2.index) {
            result.push(tmp1.value / tmp2.value);
        }
        else {
            result.push(-1.0);
        }     
    }
    return result;
};

function union(parentMap, valueMap, index1, index2, value) {
    let tmp1 = find(parentMap, valueMap, index1);
    let tmp2 = find(parentMap, valueMap, index2);
    parentMap.set(tmp1.index, tmp2.index);
    valueMap.set(tmp1.index, (value * tmp2.value) / tmp1.value);
}

function find(parentMap, valueMap, index) {
    let value = 1;
    while (parentMap.get(index) && parentMap.get(index) !== index) {
        value *= valueMap.get(index);
        index = parentMap.get(index);
    }
    if (!parentMap.get(index)) {
        return null;
    }
    return {
        index,
        value
    };
}

var calcEquation = function(equations, values, queries) {
    let parentMap = new Map();
    let valueMap = new Map();

    for (let i = 0; i < equations.length; i++) {
        !parentMap.has(equations[i][0]) 
            && parentMap.set(equations[i][0], equations[i][0]);
        !parentMap.has(equations[i][1]) 
            && parentMap.set(equations[i][1], equations[i][1]);
        !valueMap.has(equations[i][0]) 
            && valueMap.set(equations[i][0], 1);
        !valueMap.has(equations[i][1])
            &&valueMap.set(equations[i][1], 1);
        union(parentMap, valueMap, equations[i][0], equations[i][1], values[i]);
    }


    const result = [];
    
    for (let i = 0; i < queries.length; i++) {
        let tmp1 = find(parentMap, valueMap, queries[i][0]);
        let tmp2 = find(parentMap, valueMap, queries[i][1]);
        if (!tmp1 || !tmp2) {
            result.push(-1.0);
            continue;
        }
        if (tmp1.index === tmp2.index) {
            result.push(tmp1.value / tmp2.value);
        }
        else {
            result.push(-1.0);
        }     
    }
    return result;
};

function union(parentMap, valueMap, index1, index2, value) {
    let tmp1 = find(parentMap, valueMap, index1);
    let tmp2 = find(parentMap, valueMap, index2);
    parentMap.set(tmp1.index, tmp2.index);
    valueMap.set(tmp1.index, (value * tmp2.value) / tmp1.value);
}

function find(parentMap, valueMap, index) {
    let value = 1;
    while (parentMap.get(index) && parentMap.get(index) !== index) {
        value *= valueMap.get(index);
        index = parentMap.get(index);
    }
    if (!parentMap.get(index)) {
        return null;
    }
    return {
        index,
        value
    };
}

console.log(calcEquation(
    [["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]],
    [3.0,0.5,3.4,5.6],
    [["x2","x4"],["x1","x5"],["x1","x3"],["x5","x5"],["x5","x1"],["x3","x4"],["x4","x3"],["x6","x6"],["x0","x0"]]
))

console.log(calcEquation(
    [["a","b"],["e","f"],["b","e"]],
    [3.4,1.4,2.3],
    [["b","a"],["a","f"],["f","f"],["e","e"],["c","c"],["a","c"],["f","e"]]
))

console.log(calcEquation([ ["a", "b"], ["b", "c"] ], [2.0, 3.0], [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]))