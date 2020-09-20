function canPermutePalindrome(s) {
    var map = new Map();
    for (var i = 0; i < s.length; i++) {
        var tmp = map.get(s[i]);
        if (tmp == undefined) {
            map.set(s[i], false);
        }
        else {
            map.set(s[i], !tmp);
        }
    }
    var flag = false;
    for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
        var _a = map_1[_i], key = _a[0], value = _a[1];
        if (!value) {
            if (!flag) {
                flag = true;
            }
            else {
                return false;
            }
        }
    }
    return true;
}
;
console.log(canPermutePalindrome("tactcoa")); //true
