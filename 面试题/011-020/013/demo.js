/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let sum = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (count(i, j) <= k) {
                sum++;
            }
        }
    }

    return sum;
};

var movingCount = function(m, n, k) {
    
    const visit = Array(m);

    for (let i = 0; i < m; i++) {
        visit[i] = Array(n).fill(0);
    }

    function dfs(i, j) {
        if (i == m || j == n || visit[i][j] || count(i, j) > k) {
            return 0;
        }

        visit[i][j] = 1;
        return 1 + dfs(i + 1, j) + dfs(i, j + 1);
    }
    
    return dfs(0, 0);
};

function count(m, n) {
    let sum = 0;
    while (m) {
        sum += m % 10;
        m = Math.floor(m / 10);
    }

    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}

var movingCount = function(m, n, k) {
    
    const visit = Array(m);

    for (let i = 0; i < m; i++) {
        visit[i] = Array(n).fill(0);
    }

    let sum = 0;

    const queue = [[0, 0]];
    while (queue.length) {
        let [i, j] = queue.shift();
        // debugger
        if (i == m || j == n || count(i, j) > k || visit[i][j]) {
            continue;
        }
        sum++;
        visit[i][j] = 1;
        queue.push([i + 1, j]);
        queue.push([i, j + 1]);
    }

    return sum;
};

function count(m, n) {
    let sum = 0;
    while (m) {
        sum += m % 10;
        m = Math.floor(m / 10);
    }

    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}

console.log(movingCount(16, 8, 4)) // 15

console.log(movingCount(11, 8, 16)) // 88

console.log(movingCount(2, 3, 1)) // 3
console.log(movingCount(3, 1, 0)) // 1