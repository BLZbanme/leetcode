function minCostToMoveChips(position: number[]): number {
    let oneCount = 0, twoCount = 0;
    position.forEach(e => e & 1 ? oneCount++ : twoCount++);
    return Math.min(oneCount, twoCount);
};