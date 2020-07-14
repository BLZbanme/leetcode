/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const dr = [-1, 0, 1, 0];
    const dc = [0, -1, 0, 1];

    let R = grid.length;
    let C = grid[0].length;

    const queue = [];
    const depth = new Map();

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] == 2) {
                let obj = {
                    r,
                    c
                };
                queue.push(obj);
                depth.set(obj, 0);
            }
        }
    }

    let ans = 0;

    while (queue.length) {
        let now = queue.shift();
        let {r, c} = now;
        for (let k = 0; k < 4; k++) {
            let nr = r + dr[k];
            let nc = c + dc[k];
            if (0 <= nr && nr < R && 0 <= nc && nc < C && grid[nr][nc] == 1) {
                grid[nr][nc] = 2;
                let obj = {
                    r: nr,
                    c: nc
                }
                queue.push(obj);
                depth.set(obj, depth.get(now) + 1);
                ans = depth.get(now) + 1;
            }
        }
    }

    for (let row of grid) {
        if (row.some(e => e == 1)) {
            return -1;
        }
    }

    return ans;
};