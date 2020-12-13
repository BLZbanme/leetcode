function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();
    const aCode = 'a'.charCodeAt(0)
    for (let str of strs) {
        const arr = Array(26).fill(0)
        for (let i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - aCode]++;
        }
        let strSet = ''
        for (let i = 0; i < 26; i++) {
            strSet += String.fromCharCode(i + aCode) + arr[i]
        }
        let tmp = map.get(strSet)
        if (tmp) {
            tmp.push(str)
        }
        else {
            map.set(strSet, [str])
        }
    }
    const keys = Array.from(map.keys());
    const result = [];
    for (let key of keys) {
        result.push(map.get(key))
    }
    return result;
};

console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])) //[["bdddddddddd","bbbbbbbbbbc"]]