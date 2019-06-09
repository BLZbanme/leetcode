/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let a = [0, 0];
    for(let e of moves){
        switch(e){
            case "U":
                a[0] += 1;
                break;
            case "D":
                a[0] -= 1;
                break;
            case "L":
                a[1] += 1;
                break;
            case "R":
                a[1] -= 1;
                break;
            default:
                break;
        }
    }
    return a[0] == 0 && a[1] == 0;
};

var judgeCircle = function(moves) {
    let x = y = 0;
    for(let e of moves){
        switch(e){
            case "U":
                x += 1;
                break;
            case "D":
                x -= 1;
                break;
            case "L":
                y += 1;
                break;
            case "R":
                y -= 1;
                break;
            default:
                break;
        }
    }
    return x === 0 && y === 0;
};

judgeCircle("LL")
judgeCircle("UD")