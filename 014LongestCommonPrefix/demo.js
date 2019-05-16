/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    debugger
    if(strs.length == 0){
        return "";
    }
    let i = 0;
    let result = "";
    let now ="";
    while(true){
        if(i == strs[0].length){
            return result;
        }
        now = strs[0][i]
        for(let j = 1; j < strs.length; j++){
            if(i == strs[j].length || strs[j][i] != now){
                return result;
            }
        }
        result += now;
        i++;
    }
};

console.log(longestCommonPrefix(["aca","cba"]));
console.log(longestCommonPrefix(["a","b"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));