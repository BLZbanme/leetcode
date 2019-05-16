/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    let i = 0;
    let now ="";
    while(true){
        if(i == strs[0].length){
            return strs[0];
        }
        now = strs[0][i]
        for(let j = 1; j < strs.length; j++){
            if(i == strs[j].length || strs[j][i] != now){
                return strs[0].substring(0, i);
            }
        }
        i++;
    }
};

var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    let now = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(true){
            if(strs[i].indexOf(now) != 0){
                now = now.substring(0, now.length - 1);
                if(now == ""){
                    return "";
                }
            }else{
                break;
            }
        }
    }
    return now;
}

var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    let now = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(now) != 0){
            now = now.substring(0, now.length - 1);
            if(now == ""){
                return now;
            }
        }
    }
    return now;
}

console.log(longestCommonPrefix(["aca","cba"]));
console.log(longestCommonPrefix(["a","b"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));