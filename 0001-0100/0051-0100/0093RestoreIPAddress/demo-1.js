/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    const N = s.length;
    const arr = [];

    const dfs = index => {
        if (arr.length === 4) {
            if (index === N) {
                result.push(arr.join('.'));
            }
            return;
        }
        for (let i = index + 1; i <= s.length; i++) {
            let tmp = parseInt(s.slice(index, i));
            if (tmp > 255 || (s[index] === '0' && index !== i - 1)) {
                break;
            }
            arr.push(tmp);
            dfs(i);
            arr.pop();
        }
    }

    dfs(0);
    return result;
};

console.log(restoreIpAddresses("010010")); //["0.10.0.10","0.100.1.0"]
console.log(restoreIpAddresses("25525511135"));