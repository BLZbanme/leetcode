function allCellsDistOrder(R: number, C: number, r0: number, c0: number): number[][] {
    const map = new Map();
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let dis = Math.abs(i - r0) + Math.abs(j - c0);
            let tmp = map.get(dis);
            if (tmp) {
                tmp.push([i, j]);
            }
            else {
                map.set(dis, [[i, j]])
            }
        }
    }
    const keys = map.keys();
    const keysArr = Array.from(keys).sort((a, b) => a - b);
    const result = [];
    for (let key of keysArr) {
        let now = map.get(key);
        for (let kv of now) {
            result.push(kv);
        }
    }

    return result;
};

console.log(allCellsDistOrder(1, 2, 0, 0)) //[[0,0],[0,1]]

console.log(allCellsDistOrder(2, 2, 0, 1)) //[[0,1],[0,0],[1,1],[1,0]]

console.log(allCellsDistOrder(2, 3, 1, 2)) //[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]