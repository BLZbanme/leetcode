/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s == ""){
        return true;
    }
    if(s.length % 2 != 0){
        return false;
    }
    let set = new Set();
    set.add("(");
    set.add("{");
    set.add("[");
    let map = new Map();
    map.set(")", "(");
    map.set("}", "{");
    map.set("]", "[");
    let stack = [];
    let arr = s.split("");
    for(let i = 0; i < arr.length; i++){
        if(set.has(arr[i])){
            stack.push(arr[i]);
        }else{
            if(map.get(arr[i]) != stack.pop()){
                return false;
            }
        }
    }
    return stack.length == 0
};

var map = {
    "(": ")",
    "[": "]",
    "{": "}"
} 

var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        var el = s[i];
        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));