/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let tmp = (x ^ y).toString(2);
    let res = 0;
    for(let i = 0;i < tmp.length; i++){
        if(tmp[i] == '1'){
            res++;
        }
    }
    return res;
};

const hammingDistance = (x, y) => (x ^ y).toString(2).split("").filter(a => a === '1').length;

hammingDistance(1, 4)