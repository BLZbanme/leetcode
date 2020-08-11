/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    if (N & 1) {
        return false;
    }
    return true;
};

var divisorGame = function(N) {
    return !(N & 1);
};