/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const setList = [];
    equations.sort((e1, e2) => {
        if (e1[1] === "=") {
            return -1;
        }
        else if (e2[1] === "=") {
            return 1;
        }
        else {
            return 0;
        }
    })

    // debugger
    for (let e of equations) {
        if (e[1] === "=") {
            let theSet = null;
            for (let item in setList) {
                if (!setList[item]) {
                    continue;
                }
                if (setList[item].has(e[0]) || setList[item].has(e[3])) {
                    if (!theSet) {
                        setList[item].add(e[0]);
                        setList[item].add(e[3]);
                        theSet = setList[item];
                    }
                    else {
                        setList[item].forEach(e => {
                            theSet.add(e);
                        })
                        setList[item] = null;
                    }
                }
            }
            (theSet == null) && setList.push(new Set([e[0], e[3]]));
        }
        else {
            if (e[0] === e[3]) {
                return false;
            }
            for (let set of setList) {
                if (!set) {
                    continue;
                }
                if (set.has(e[0]) && set.has(e[3])) {
                    return false;
                }
            }
        }
    }

    return true;
};

var equationsPossible = function(equations) {
    const parent = new Array(26);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    for (let str of equations) {
        if (str[1] === "=") {
            let index1 = str[0].charCodeAt() - aCode;
            let index2 = str[3].charCodeAt() - aCode;
            union(parent, index1, index2);
        }
    }

    for (let str of equations) {
        if (str[1] === '!') {
            let index1 = str[0].charCodeAt() - aCode;
            let index2 = str[3].charCodeAt() - aCode;
            if (find(parent, index1) == find(parent, index2)) {
                return false;
            }
        }
    }

    return true;
}

function union(parent, index1, index2) {
    parent[find(parent, index1)] = find(parent, index2);
}

function find(parent, index) {
    while (parent[index] != index) {
        parent[index] = parent[parent[index]]
        index = parent[index];
    }
    return index;
}

var equationsPossible = function(equations) {
    const parent = new Array(26).fill(-1);
    const aCode = 'a'.charCodeAt();
    for (let equation of equations) {
        if (equation[1] === "=") {
            let left = equation[0].charCodeAt() - aCode;
            let right = equation[3].charCodeAt() - aCode;
            union(parent, left, right);
        }
    }

    for (let equation of equations) {
        if (equation[1] === "!") {
            let left = equation[0].charCodeAt() - aCode;
            let right = equation[3].charCodeAt() - aCode;
            if (find(parent, left) === find(parent, right)) {
                return false;
            }
        }
    }

    return true;
}

function union(parent, index1, index2) {
    parent[find(parent, index1)] = find(parent, index2);
}

function find(parent, index) {
    while (parent[index] !== -1) {
        index = parent[index];
    }
    return index;
}



console.log(equationsPossible(["a!=a"])) //false

console.log(equationsPossible(["a==c", "a==b", "c==d", "a!=d"])) //false

console.log(equationsPossible(["a==c", "a==b", "c==d"])) //true

console.log(equationsPossible(["a==b","b!=a"])) //false
console.log(equationsPossible(["b==a","a==b"])) //true
console.log(equationsPossible(["a==b","b==c","a==c"])) //true
console.log(equationsPossible(["a==b","b!=c","c==a"])) //false
console.log(equationsPossible(["c==c","b==d","x!=z"])) //true