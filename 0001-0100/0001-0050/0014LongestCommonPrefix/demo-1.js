var longestCommonPrefix = function(strs) {
    return strs.reduce(getCommonPre, strs[0]) || "";
};

var getCommonPre = function(common, str) {
    for (var i = 0; i < str.length && i < common.length; i++) {
        if (common[i] != str[i]) {
            break;
        }
    }
    return common.substr(0, i);
}

var longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return "";
    }
    let i = 0;
    while (true) {
        if (strs[0].length == i) {
            return strs[0].substr(0, i);
        }
        let tmp = strs[0][i];
        for (var j = 1; j < strs.length; j++) {
            if (strs[j].length == i || strs[j][i] != tmp) {
                return strs[0].substr(0, i);
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
    debugger
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

console.log(longestCommonPrefix(["flower","flow","flight"]))

console.log(longestCommonPrefix([]))
