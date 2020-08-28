function judgeCircle(moves: string): boolean {
    let i = 0;
    let j = 0;
    for (let k = 0; k < moves.length; k++) {
        switch(moves[k]) {
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
};