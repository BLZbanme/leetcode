function videoStitching1(clips, T) {
    var maxEnd = 0;
    clips.forEach(function (e) { return maxEnd = Math.max(maxEnd, e[1]); });
    if (maxEnd < T) {
        return -1;
    }
    var dp = Array(maxEnd + 1).fill(0).map(function (e) { return Array(maxEnd + 1).fill(Infinity); });
    clips.forEach(function (e) {
        var start = e[0], end = e[1];
        end = Math.min(end, T);
        for (var i = start; i <= end; i++) {
            for (var j = i; j <= end; j++) {
                dp[i][j] = 1;
            }
        }
    });
    for (var i = 0; i <= T; i++) {
        if (dp[0][i] == 1)
            continue;
        for (var j = i - 1; j >= 0; j--) {
            if (dp[0][j] == Infinity || dp[j][i] == Infinity) {
                continue;
            }
            dp[0][i] = Math.min(dp[0][i], dp[0][j] + dp[j][i]);
        }
        if (dp[0][i] == Infinity) {
            return -1;
        }
    }
    return dp[0][T];
}
;
function videoStitching2(clips, T) {
    var dp = Array(T + 1).fill(Infinity);
    dp[0] = 0;
    for (var i = 1; i <= T; i++) {
        for (var _i = 0, clips_1 = clips; _i < clips_1.length; _i++) {
            var clip = clips_1[_i];
            if (clip[0] < i && i <= clip[1]) {
                dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
            }
        }
    }
    return dp[T] == Infinity ? -1 : dp[T];
}
function videoStitching(clips, T) {
    var maxNow = Array(T + 1).fill(0);
    for (var _i = 0, clips_2 = clips; _i < clips_2.length; _i++) {
        var clip = clips_2[_i];
        if (clip[0] <= T) {
            maxNow[clip[0]] = Math.max(maxNow[clip[0]], clip[1]);
        }
    }
    var count = 0;
    var last = 0;
    var pre = 0;
    for (var i = 0; i <= T; i++) {
        last = Math.max(last, maxNow[i]);
        if (i == last) {
            return -1;
        }
        if (last >= T) {
            return count + 1;
        }
        if (i == pre) {
            count++;
            pre = last;
        }
    }
    return -1;
}
console.log(videoStitching([[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]], 10)); //3
console.log(videoStitching([[0, 1], [1, 2]], 5)); //-1
console.log(videoStitching([[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]], 9)); //3
console.log(videoStitching([[0, 4], [2, 8]], 5)); //2
console.log(videoStitching([[5, 7], [1, 8], [0, 0], [2, 3], [4, 5], [0, 6], [5, 10], [7, 10]], 5)); //1
