/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];
    const LENGTH = s.length;
    for (let i = 1; i < 4 && i < LENGTH - 2; i++) {
        for (let j = i + 1; j < i + 4 && j < LENGTH - 1; j++) {
            for (let k = j + 1; k < j + 4 && k < LENGTH; k++) {
                    let ip1 = s.slice(0, i);
                    let ip2 = s.slice(i, j);
                    let ip3 = s.slice(j, k);
                    let ip4 = s.slice(k, LENGTH);
                    if (isValid(ip4) && isValid(ip2)
                        && isValid(ip3) && isValid(ip1)
                    ) {
                        result.push([ip1, ip2, ip3, ip4].join("."));
                    }
            }
        }
    }
    return result;
};

function isValid(str) {
    if (str.length > 3 || str.length == 0 
        || (str[0] === '0' && str.length > 1) || +str > 255
    ) {
        return false;
    }
    return true;
}

console.log(restoreIpAddresses("25525511135"))