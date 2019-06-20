/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    let arr = s.split(" ");
    if(arr.length == 1){
        return s.length;
    }
    return arr.pop().length;
};

var lengthOfLastWord = function(s) {
    s = s.trim();
    let i = s.lastIndexOf(" ");
    return s.length - 1 - i;
};


var lengthOfLastWord = function(s) {
    let length = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === " "){
            if(length === 0){
                continue;
            }else{
                return length;
            }
        }else{
            length++;
        }
    }
    return length;
};

var lengthOfLastWord = function(s) {
    let res = 0;
    let index = s.length - 1;
    while(index >= 0 && s[index] === " "){
        index--;
    }
    while(index >= 0 && s[index] !== " "){
        res++;
        index--;
    }
    return res;
};

console.log(lengthOfLastWord("a "))
console.log(lengthOfLastWord("aad"))
console.log(lengthOfLastWord("Hello World"))