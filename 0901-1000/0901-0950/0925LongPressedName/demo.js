"use strict";
function isLongPressedName1(name, typed) {
    var queue1 = [];
    var queue2 = [];
    helper(queue1, name);
    helper(queue2, typed);
    if (queue1.length != queue2.length) {
        return false;
    }
    for (var i = 0; i < queue1.length; i++) {
        if (queue1[i].val != queue2[i].val || queue1[i].num > queue2[i].num) {
            return false;
        }
    }
    return true;
}
;
var obj = /** @class */ (function () {
    function obj(val, num) {
        this.val = val;
        this.num = num;
    }
    return obj;
}());
function helper(arr, str) {
    for (var i = 0; i < str.length; i++) {
        if (arr.length && arr[arr.length - 1].val == str[i]) {
            arr[arr.length - 1].num++;
        }
        else {
            arr.push(new obj(str[i], 1));
        }
    }
}
function isLongPressedName(name, typed) {
    var i = 0;
    var j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
            j++;
        }
        else if (j > 0 && typed[j] == typed[j - 1]) {
            j++;
        }
        else {
            return false;
        }
    }
    return i === name.length;
}
console.log(isLongPressedName("alex", "aaleex")); //true
console.log(isLongPressedName("sawwd", "ssaaedd")); //false
console.log(isLongPressedName("leelee", "lleeelee")); //true
console.log(isLongPressedName("laiden", "laiden")); //true
