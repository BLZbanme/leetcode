/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix || !matrix.length) {
        return 0;
    }

    const M = matrix.length;
    const N = matrix[0].length;

    const dp = Array(M);
    for (let i = 0; i < M; i++) {
        dp[i] = Array(N);
    }

    //[value, increaseLen, descLen];
    dp[0][0] = {
        addPre: [-1, -1],
        addLen: 1,
        subPre: [-1, -1],
        subLen: 1
    };

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (!i && !j) {
                continue;
            } 
            if (!i) {
                if (matrix[0][j] > matrix[0][j - 1]) {
                    dp[0][j] = {
                        addPre: [0, j - 1],
                        addLen: dp[0][j - 1].addLen + 1,
                        subPre: [-1, -1],
                        subLen: 1
                    }
                    let tmpI = 0;
                    let tmpJ = j - 1;
                    while (tmpI != -1 && tmpJ != -1) {
                        dp[tmpI][tmpJ].addLen++;
                        [tmpI, tmpJ] = dp[tmpI][tmpJ].addPre;
                    }
                }
                else if (matrix[0][j] < matrix[0][j - 1]) {
                    dp[0][j] = {
                        addPre: [-1, -1],
                        addLen: 1,
                        subPre: [0, j - 1],
                        subLen: dp[0][j - 1].subLen + 1
                    }
                    let tmpI = 0;
                    let tmpJ = j - 1;
                    while (tmpI != -1 && tmpJ != -1) {
                        dp[tmpI][tmpJ].subPre++;
                        [tmpI, tmpJ] = dp[tmpI][tmpJ].subPre;
                    }
                }
                else {
                    dp[0][j] = {
                        addPre: [-1, -1],
                        addLen: 1,
                        subPre: [-1, -1],
                        subLen: 1
                    }
                }
            }
            else if (!j) {
                if (matrix[i][0] > matrix[i - 1][0]) {
                    dp[i][0] = {
                        addPre: [i - 1, 0],
                        addLen: dp[i - 1][0].addLen + 1,
                        subPre: [-1, -1],
                        subLen: 1
                    }
                    let tmpI = i - 1;
                    let tmpJ = 0;
                    while (tmpI != -1 && tmpJ != -1) {
                        dp[tmpI][tmpJ].addLen++;
                        [tmpI, tmpJ] = dp[tmpI][tmpJ].addPre;
                    }
                }
                else if (matrix[i][0] < matrix[i - 1][0]) {
                    dp[i][0] = {
                        addPre: [-1, -1],
                        addLen: 1,
                        subPre: [i - 1, 0],
                        subLen: dp[i - 1][0].subLen + 1
                    }
                    let tmpI = i - 1;
                    let tmpJ = 0;
                    while (tmpI != -1 && tmpJ != -1) {
                        dp[tmpI][tmpJ].subPre++;
                        [tmpI, tmpJ] = dp[tmpI][tmpJ].subPre;
                    }
                }
                else {
                    dp[i][0] = {
                        addPre: [-1, -1],
                        addLen: 1,
                        subPre: [-1, -1],
                        subLen: 1
                    }
                }
            }
            else {

            }
        }
    }
};


var longestIncreasingPath = function(matrix) {
    if (!matrix || !matrix.length) {
        return 0;
    }

    let result = 0;

    const M = matrix.length;
    const N = matrix[0].length;
    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(0);
    }

    function dfs(i, j) {
        if (visited[i][j]) {
            return visited[i][j];
        }

        let right = 0;
        let down = 0;
        let left = 0;
        let up = 0;

        if (j < N - 1 && matrix[i][j] < matrix[i][j + 1]) {
            right = dfs(i, j + 1);
        }

        if (i < M - 1 && matrix[i][j] < matrix[i + 1][j]) {
            down = dfs(i + 1, j);
        }

        if (j > 0 && matrix[i][j] < matrix[i][j - 1]) {
            left = dfs(i, j - 1);
        }

        if (i > 0 && matrix[i][j] < matrix[i - 1][j]) {
            up = dfs(i - 1, j);
        }
        visited[i][j] = 1 + Math.max(right, down, left, up);
        return visited[i][j];
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            result = Math.max(result, dfs(i, j));
        }
    }

    return result;
}



console.log(longestIncreasingPath([
    [9,9,4],
    [6,6,8],
    [2,1,1]
])); //4

console.log(longestIncreasingPath([
    [3,4,5],
    [3,2,6],
    [2,2,1]
])); //4