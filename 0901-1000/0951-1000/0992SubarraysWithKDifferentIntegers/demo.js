function subarraysWithKDistinct1(A, K) {
    var n = A.length;
    var result = 0;
    for (var i = 0; i < n; i++) {
        var set = new Set();
        for (var j = i; j < n; j++) {
            set.add(A[j]);
            if (set.size === K) {
                result++;
            }
            if (set.size > K) {
                break;
            }
        }
    }
    return result;
}
;
function subarraysWithKDistinct(A, K) {
    var n = A.length;
    var helper = function (k) {
        var left = 0;
        var map = new Map();
        var result = 0;
        for (var right = 0; right < n; right++) {
            map.set(A[right], (map.get(A[right]) || 0) + 1);
            while (map.size > k && left <= right) {
                var tmp = map.get(A[left]);
                if (tmp > 1) {
                    map.set(A[left], tmp - 1);
                }
                else {
                    map["delete"](A[left]);
                }
                left++;
            }
            result += right - left + 1;
        }
        return result;
    };
    return helper(K) - helper(K - 1);
}
;
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); //7
console.log(subarraysWithKDistinct([1,2,1,3,4], 3))//3