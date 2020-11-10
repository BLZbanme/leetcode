function findRotateSteps1(ring, key) {
    var N = ring.length;
    var M = key.length;
    var dp = Array(M).fill(0).map(function (e) { return []; });
    var map = new Map();
    for (var i = 0; i < N; i++) {
        var tmp = map.get(ring[i]);
        if (tmp) {
            tmp.push(i);
        }
        else {
            map.set(ring[i], [i]);
        }
    }
    var now = map.get(ring[0]);
    for (var _i = 0, now_1 = now; _i < now_1.length; _i++) {
        var e = now_1[_i];
        dp[0].push({
            index: e,
            step: Math.min(e, N - e)
        });
    }
    for (var i = 1; i < M; i++) {
        var pre = dp[i - 1];
        var now_4 = map.get(key[i]);
        for (var _a = 0, now_2 = now_4; _a < now_2.length; _a++) {
            var e = now_2[_a];
            for (var _b = 0, pre_1 = pre; _b < pre_1.length; _b++) {
                var preItem = pre_1[_b];
                var theIndex = preItem.index;
                var stepDiff = Infinity;
                for (var _c = 0, now_3 = now_4; _c < now_3.length; _c++) {
                    var nowItem = now_3[_c];
                    if (theIndex > nowItem) {
                        stepDiff = Math.min(stepDiff, theIndex - nowItem, nowItem + N - theIndex);
                    }
                    else {
                        stepDiff = Math.min(stepDiff, nowItem - theIndex, theIndex + N - nowItem);
                    }
                }
                dp[i].push({
                    index: e,
                    step: preItem.step + stepDiff
                });
            }
        }
    }
    return Math.min.apply(Math, dp[M - 1].map(function (e) { return e.step; })) + M;
}
;
function findRotateSteps(ring, key) {
    var M = ring.length;
    var N = key.length;
    var map = new Map();
    for (var i = 0; i < M; i++) {
        var tmp = map.get(ring[i]);
        if (tmp) {
            tmp.push(i);
        }
        else {
            map.set(ring[i], [i]);
        }
    }
    var dp = Array(N).fill(0).map(function (e) { return Array(M).fill(Infinity); });
    var first = map.get(key[0]);
    for (var _i = 0, first_1 = first; _i < first_1.length; _i++) {
        var i = first_1[_i];
        dp[0][i] = Math.min(i, M - i) + 1;
    }
    for (var i = 1; i < N; i++) {
        for (var _a = 0, _b = map.get(key[i]); _a < _b.length; _a++) {
            var j = _b[_a];
            for (var _c = 0, _d = map.get(key[i - 1]); _c < _d.length; _c++) {
                var k = _d[_c];
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), M - Math.abs(j - k)) + 1);
            }
        }
    }
    return Math.min.apply(Math, dp[N - 1]);
}
console.log(findRotateSteps('godding', 'godding')); //13
console.log(findRotateSteps('godding', 'gd')); //4
