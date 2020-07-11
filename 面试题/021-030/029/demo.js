/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    if (!matrix) {
        return [];
    }

    const M = matrix.length;
    if (!M) {
        return [];
    }

    const N = matrix[0].length;
    if (!N) {
        return [];
    }

    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(false);
    }

    let depth = 0;
    const result = [];
    let tmp = Math.min(M, N) >> 1;
    while (true) {
        if (depth > tmp) {
            break;
        }
        for (let i = depth; i <= N - depth - 1; i++) {
            if (!visited[depth][i]) {
                result.push(matrix[depth][i]);
                visited[depth][i] = true;
            }
            
        }

        for (let i = depth; i < M - depth - 1; i++) {
            if (!visited[i][N - 1 - depth]) {
                result.push(matrix[i][N - 1 - depth]);
                visited[i][N - 1 - depth] = true;
            }
        }

        for (let i = N - depth - 1; i > depth; i--) {
            if (!visited[M - 1 - depth][i]) {
                result.push(matrix[M - 1 - depth][i])
                visited[M - 1 - depth][i] = true;
            }  
        }

        for (let i = M - depth - 1; i > depth; i--) {
            if (!visited[i][depth]) {
                result.push(matrix[i][depth]);
                visited[i][depth] = true;
            }
        }
        depth++;
    }

    return result;
};


var spiralOrder = function(matrix) {

    if (!matrix) {
        return [];
    }

    const M = matrix.length;
    if (!M) {
        return [];
    }

    const N = matrix[0].length;
    if (!N) {
        return [];
    }

    let depth = 0;
    const result = [];

    while (true) {

        if (M <= depth * 2 || N <= depth * 2) {
            break;
        }
        for (let i = depth; i < N - depth - 1; i++) {
            result.push(matrix[depth][i]);
        }

        for (let i = depth; i <= M - depth - 1; i++) {
            result.push(matrix[i][N - 1 - depth]);
        }

        if (M - depth * 2 > 1 && N - depth * 2 > 1) {
            for (let i = N - depth - 2; i > depth; i--) {
                result.push(matrix[M - 1 - depth][i])
            }
    
            for (let i = M - depth - 1; i > depth; i--) {
                result.push(matrix[i][depth]);
            }
        }

        depth++;
    }

    return result;
};

console.log(spiralOrder([[2,5],[8,4],[0,-1]])) //[2,5,4,-1,0,8]

console.log(spiralOrder([[6,9,7]])) //[6,9,7]

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) //[1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([[3],[2]])) //[3,2]



console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])) //[1,2,3,4,8,12,11,10,9,5,6,7]
