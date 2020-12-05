function leastInterval(tasks: string[], n: number): number {
    const map = new Map();
    let max = 0;
    let maxCount = 0;
    for (let task of tasks) {
        let tmp = (map.get(task) || 0) + 1;
        map.set(task, tmp);
        if (tmp > max) {
            max = tmp;
            maxCount = 0;
        }
        if (tmp === max) {
            maxCount++;
        }
    }
    return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
};