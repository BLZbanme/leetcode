/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = tmp = "1";
    while(n > 1){
        let i = 0;
        result = "";
        while(i < tmp.length){
            let j = 1;
            let now = tmp[i];
            while(i + j < tmp.length && tmp[i + j] == now){
                j++;
            }
            result += j + now;
            i += j;
        }
        n--;
        tmp = result;
    }
    return result;
};
countAndSay(2)