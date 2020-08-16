function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    if (image == undefined || image.length === 0) {
        return [[]];
    }

    const M = image.length;
    const N = image[0].length;
    const visited: Array<Array<boolean>> = Array(M);

    for (let i = 0; i < M; i++) {
        visited[i] = (Array(N) as any).fill(false);
    }
    
    let curColor = image[sr][sc];

    const dfs = (i: number, j: number): void => {
        if (i < 0 || j < 0 || i == M ||j == N || visited[i][j]) {
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
    }

    dfs(sr, sc);

    return image;
};

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));