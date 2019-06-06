/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

var strStr = function(haystack, needle) {
    if(needle == ""){
        return 0;
    }
    let i = 0, j = 0;
    let l = needle.length;
    while(i < haystack.length){
        while(j < l){
            if(i + j < haystack.length){
                if(haystack[i + j] == needle[j]){
                    j++;
                }else{
                    break;
                }
            }else{
                return -1;
            }
        }
        if(j == l){
            return i;
        }
        i++;
        j = 0;
    }
    if(i == haystack.length){
        return -1;
    }
};

var strStr = function(haystack, needle) {
    for(let i = 0; ; i++){
        for(let j = 0; ;j++){
            if(j == needle.length){
                return i;
            }
            if(i + j == haystack.length){
                return -1;
            }
            if(haystack[i + j] != needle[j]){
                break;
            }
        }
    }
}

var strStr = function(s, p){
    let next = getNext(p);
    let i = 0;
    let j = 0;
    let sLen = s.length;
    let pLen = p.length;
    while(i < sLen && j < pLen){
        if(j == -1 || s[i] == p[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j == pLen){
        return i - j;
    }else{
        return -1;
    }
}

function getNext(str){
    let next = new Array(str.length);
    let i = 0, j = -1;
    next[0] = -1;
    while(i < str.length - 1){
        if(j == -1 || str[i] == str[j]){
            ++i;
            ++j;
            next[i] = j;
        }else{
            j = next[j];
        }
    }
    return next;
}

//优化后的
function getNext(str){
    let next = new Array(str.length);
    let i = 0, j = -1;
    next[0] = -1;
    while(i < str.length - 1){
        if(j == -1 || str[i] == str[j]){
            ++i;
            ++j;
            if(str[i] != str[j]){
                next[i] = j;
            }else{
                next[i] = next[j];
            }
        }else{
            j = next[j];
        }
    }
    return next;
}

function getNext(str){
    let next = new Array(str.length);
    let i = 0, j = -1;
    next[0] = -1;
    while(i < str.length - 1){
        if(j == -1 || str[i] == str[j]){
            ++i;
            ++j;
            next[i] = j;
        }else{
            j = next[j];
        }
    }
    return next;
}
// getNext("abababca");

console.log(strStr("hello","ll" ))
console.log(strStr("mississippi","issipi" ))
console.log(strStr("a","a" ))
console.log(strStr("","" ))
console.log(strStr("hello","ll" ))
console.log(strStr("aaaaa","bba" ))


