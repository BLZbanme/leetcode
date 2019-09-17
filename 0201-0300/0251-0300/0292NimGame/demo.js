/**
 * @param {number} n
 * @return {boolean}
 */

var canWinNim = function(n) {
    let win = true;
    win = doAgain(n, win);
    return win;
};

function doAgain(n, bool){
    if(n <= 3){
        return bool;
    }
    return doAgain(n - 1, !bool);
}

var win = true;

var canWinNim = function(n) {
    if(n <= 3){
        return win;
    }else{
        win = !win;
        return canWinNim(n - 1);
    }
};

var canWinNim = function(n) {
    return n % 4 != 0;
};

console.log(canWinNim(5))