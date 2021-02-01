"use strict";
var ans, sz, dp, graph;
var dfs = function (u, f) {
    sz[u] = 1;
    dp[u] = 0;
    for (var _i = 0, _a = graph[u]; _i < _a.length; _i++) {
        var v = _a[_i];
        if (v === f) {
            continue;
        }
        dfs(v, u);
        dp[u] += dp[v] + sz[v];
        sz[u] += sz[v];
    }
};
var dfs2 = function (u, f) {
    ans[u] = dp[u];
    for (var _i = 0, _a = graph[u]; _i < _a.length; _i++) {
        var v = _a[_i];
        if (v === f)
            continue;
        var pu = dp[u], pv = dp[v];
        var su = sz[u], sv = sz[v];
        dp[u] -= dp[v] + sz[v];
        sz[u] -= sz[v];
        dp[v] += dp[u] + sz[u];
        sz[v] += sz[u];
        dfs2(v, u);
        dp[u] = pu, dp[v] = pv;
        sz[u] = su, sz[v] = sv;
    }
};
function sumOfDistancesInTree(N, edges) {
    ans = Array(N).fill(0);
    sz = Array(N).fill(0);
    dp = Array(N).fill(0);
    graph = Array(N).fill(0).map(function (v) { return []; });
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var _a = edges_1[_i], u = _a[0], v = _a[1];
        graph[u].push(v);
        graph[v].push(u);
    }
    dfs(0, -1);
    dfs2(0, -1);
    return ans;
}
;
