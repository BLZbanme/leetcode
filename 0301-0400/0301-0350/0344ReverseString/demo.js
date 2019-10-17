/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i = 0; i < s.length / 2; i++){
        let tmp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = tmp; 
    }
    return s;
};

var reverseString = function(s) {
    return s.reverse();
}

var reverseString = function(s) {
    let i = 0, j = s.length - 1;
    while(i < j){
        let tmp = s[i];
        s[i++] = s[j];
        s[j--] = tmp;
    }
    return s;
}


reverseString(["H","a","n","n","a","h"]);
reverseString(["h","e","l","l","o"]);