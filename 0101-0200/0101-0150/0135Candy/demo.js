"use strict";
function candy(ratings) {
    if (ratings.length === 1)
        return 1;
    var N = ratings.length;
    var left = Array(N).fill(0);
    var right = Array(N).fill(0);
    left[0] = 1;
    for (var i = 1; i < N; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
        else {
            left[i] = 1;
        }
    }
    right[N - 1] = 1;
    for (var i = N - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
        else {
            right[i] = 1;
        }
    }
    var sum = 0;
    for (var i = 0; i < N; i++) {
        sum += Math.max(left[i], right[i]);
    }
    return sum;
}
;
console.log(candy([1, 0, 2])); //5
console.log(candy([1, 2, 2])); //4
