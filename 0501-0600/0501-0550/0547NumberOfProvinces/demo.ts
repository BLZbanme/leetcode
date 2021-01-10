function findCircleNum(isConnected: number[][]): number {
    const provinces = isConnected.length;
    const visited = new Set();
    let circles = 0;

    const dfs = (i: number) => {
        for (let j = 0; j < provinces; j++) {
            if (isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(j);
                dfs(j);
            }
        }
    }

    for (let i = 0; i < provinces; i++) {
        if (!visited.has(i)) {
            dfs(i);
            circles++;
        }
    }
    return circles;
};
