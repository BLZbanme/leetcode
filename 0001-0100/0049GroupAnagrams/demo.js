/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let res = [];
    for(let str of strs){
        let strSort = [...str].sort().join("");
        if(!map.has(strSort)){
            let arr = [str];
            map.set(strSort, arr);
            res.push(arr);
        }else{
            map.get(strSort).push(str);
        }
    }
    return res;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])