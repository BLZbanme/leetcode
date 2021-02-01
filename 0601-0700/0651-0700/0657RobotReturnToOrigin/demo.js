"use strict";
function judgeCircle(moves) {
    var i = 0;
    var j = 0;
    for (var k = 0; k < moves.length; k++) {
        switch (moves[k]) {
            case 'L':
                i++;
                break;
            case 'R':
                i--;
                break;
            case 'U':
                j--;
                break;
            case 'D':
                j++;
                break;
            default:
                break;
        }
    }
    return i === 0 && j === 0;
}
;
