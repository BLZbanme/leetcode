function numJewelsInStones(J: string, S: string): number {
    const set = new Set(J.split(''));
    return S.split('').filter(e => set.has(e)).length;
};