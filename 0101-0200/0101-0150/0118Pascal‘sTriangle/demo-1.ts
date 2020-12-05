function generate(numRows: number): number[][] {
    if (!numRows) {
        return [];
    }
    const result = [[1]];
    for (let i = 1; i < numRows; i++) {
        const now = [1];
        for (let j = 1; j < result[i - 1].length; j++) {
            now.push(result[i - 1][j - 1] + result[i - 1][j])
        }
        now.push(1);
        result.push(now);
    }
    return result;
};