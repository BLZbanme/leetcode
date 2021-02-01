"use strict";
function lemonadeChange(bills) {
    var map = new Map([[5, 0], [10, 0]]);
    for (var _i = 0, bills_1 = bills; _i < bills_1.length; _i++) {
        var bill = bills_1[_i];
        if (bill === 5) {
            map.set(5, (map.get(5) || 0) + 1);
        }
        else if (bill === 10) {
            var tmp = map.get(5);
            if (tmp) {
                map.set(5, tmp - 1);
                map.set(10, (map.get(10) || 0) + 1);
            }
            else {
                return false;
            }
        }
        else {
            var tmp1 = map.get(10);
            var tmp2 = map.get(5) || 0;
            if (tmp1 && tmp2) {
                map.set(10, tmp1 - 1);
                map.set(5, tmp2 - 1);
            }
            else if (tmp2 > 2) {
                map.set(5, tmp2 - 3);
            }
            else {
                return false;
            }
        }
    }
    return true;
}
;
console.log(lemonadeChange([5, 5, 5, 10, 20])); // true
console.log(lemonadeChange([5, 5, 10])); // true
console.log(lemonadeChange([10, 10])); // false
console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
