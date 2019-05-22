/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n == 1){
        return ["()"]
    }
    let arr = ["(", ")"];
    let all = [];
    let tmp = ["(", ")"];
    let l = 2 * n;
    while(l > 3){
        all = [];
        for(let i = 0; i < tmp.length; i++){
            for(let j = 0; j < arr.length; j++){
                all.push(tmp[i] + arr[j]);
            }
        }
        tmp = all;
        l--;
    }
    let result = [];
    for(let i = 0; i < all.length; i++){
        let now = "(" + all[i] + ")";
        if(isValid(now)){
            result.push(now);
        }
    }
    return result;
};

var isValid = function(s) {
    var stack = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] == "("){
            stack++;
        }else {
            stack--;
        }
        if(stack < 0){
            return false;
        }
    }
    return stack === 0;
};

var generateParenthesis = function(n) {
    let res = [];
    backTrack(res, "", 0, 0, n);
    return res;
}

function backTrack(arr, str, left, right, max){
    if(str.length == max * 2){
        arr.push(str);
        return;
    }
    if(left < max){
        backTrack(arr, str + "(", left + 1, right, max);
    }
    if(right < left){
        backTrack(arr, str + ")", left, right + 1, max);
    }
}

console.log(generateParenthesis(3))