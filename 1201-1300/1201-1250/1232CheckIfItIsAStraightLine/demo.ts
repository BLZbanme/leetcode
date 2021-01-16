function checkStraightLine(coordinates: number[][]): boolean {
    const N = coordinates.length;
    if (N <= 2) return true;
    coordinates.sort((a, b) => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    })
    const xDiff = coordinates[1][0] - coordinates[0][0];
    const yDiff = coordinates[1][1] - coordinates[0][1];
    for (let i = 2; i < N; i++) {
        if ((!yDiff && coordinates[i][1] - coordinates[i - 1][1] === 0) 
            || ((coordinates[i][0] - coordinates[i - 1][0]) / (coordinates[i][1] - coordinates[i - 1][1]) === xDiff / yDiff)) {
                continue;
            }
        return false;
    }   
    return true;
};