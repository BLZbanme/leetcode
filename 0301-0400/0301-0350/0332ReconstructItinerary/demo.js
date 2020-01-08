/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = new Map();
    let map2 = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
        if (map2.has(e[0] + e[1])) {
            map2.set(e[0] + e[1], map2.get(e[0] + e[1]) + 1);
        }
        else {
            map2.set(e[0] + e[1], 1);
        }
    })

    const COUNT = tickets.length;
    let start = 'JFK';
    let result = [];
    let tmp = [];

    function dfs(str) {
        if (result.length) {
            return;
        }
        tmp.push(str);
        if (tmp.length == COUNT + 1 && !result.length) {
            result = Array.from(tmp);
            return;
        }
        let arr = map.get(str);
        if (arr) {
            arr.forEach(e => {
                if (map2.get(str + e)) {
                    map2.set(str + e,  map2.get(str + e) - 1);
                    dfs(e);
                    map2.set(str + e,  map2.get(str + e) + 1);
                }
            })
        }
        tmp.pop();
    }

    dfs(start);
    return result;
};

var findItinerary = function(tickets) {
    let map = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
    })

    let result = [];
    
    function dfs(str) {
        while(map.has(str) && map.get(str).length) {
            dfs(map.get(str).shift());
        }
        result.unshift(str);
    }

    dfs('JFK');
    return result;
}

var findItinerary = function(tickets) {
    let map = new Map();
    tickets.forEach(e => {
        if (map.has(e[0])) {
            let arr = map.get(e[0]);
            arr.push(e[1]);
            arr.sort();
        }
        else {
            map.set(e[0], [e[1]])
        }
    })

    let result = [];
    let stack = ['JFK'];
    while (stack.length) {
        while (map.has(stack[stack.length - 1]) && map.get(stack[stack.length - 1]).length) {
            stack.push(map.get(stack[stack.length - 1]).shift());
        }
        result.unshift(stack.pop());
    }
    return result;
}

console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]));

console.log(findItinerary([["MEL","PER"],["SYD","CBR"],["AUA","DRW"],["JFK","EZE"],
                            ["PER","AXA"],["DRW","AUA"],["EZE","SYD"],["AUA","MEL"],
                            ["DRW","AUA"],["PER","ANU"],["CBR","EZE"],["EZE","PER"],
                            ["MEL","EZE"],["EZE","MEL"],["EZE","TBI"],["ADL","DRW"],
                            ["ANU","EZE"],["AXA","ADL"]]));

console.log(findItinerary([["EZE","AXA"],["TIA","ANU"],["ANU","JFK"],["JFK","ANU"],["ANU","EZE"],["TIA","ANU"],["AXA","TIA"],["TIA","JFK"],["ANU","TIA"],["JFK","TIA"]]));

console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]));

console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));


