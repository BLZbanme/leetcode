"use strict";
function floodFill(image, sr, sc, newColor) {
    if (image == undefined || image.length === 0) {
        return [[]];
    }
    var M = image.length;
    var N = image[0].length;
    var visited = Array(M);
    for (var i = 0; i < M; i++) {
        visited[i] = Array(N).fill(false);
    }
    var curColor = image[sr][sc];
    var dfs = function (i, j) {
        if (i < 0 || j < 0 || i == M || j == N || visited[i][j]) {
            return;
        }
        visited[i][j] = true;
        if (image[i][j] == curColor) {
            image[i][j] = newColor;
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i + 1, j);
            dfs(i, j - 1);
        }
        return;
    };
    dfs(sr, sc);
    return image;
}
;
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));
