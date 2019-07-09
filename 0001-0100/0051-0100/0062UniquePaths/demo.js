/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let opArr = new Array(m);
    for(let i = 0; i < m; i++){
        opArr[i] = new Array(n);
    }
    for(let i = 0; i < n; i++){
        opArr[0][i] = 1;
    }
    for(let i = 0; i < m; i++){
        opArr[i][0] = 1;
    }
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            opArr[j][i] = opArr[j - 1][i] + opArr[j][i - 1]; 
        }
    }
    return opArr[m - 1][n - 1];
};

console.log(uniquePaths(3, 2));
console.log(uniquePaths(7, 3));