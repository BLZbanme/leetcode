function smallerNumbersThanCurrent(nums) {
    var N = nums.length;
    var map = new Map();
    nums.forEach(function (e) {
        map.set(e, (map.get(e) || 0) + 1);
    });
    var keys = Array.from(map.keys()).sort(function (a, b) { return a - b; });
    var sum = 0;
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var tmp = map.get(key);
        map.set(key, sum);
        sum += tmp;
    }
    return nums.map(function (e) { return map.get(e); });
}
;
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); //[4,0,1,1,3]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); //[2,1,0,3]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); //[0 , 0, 0, 0]
