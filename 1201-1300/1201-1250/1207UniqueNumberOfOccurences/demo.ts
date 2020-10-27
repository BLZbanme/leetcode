function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();
    arr.forEach(e => {
        map.set(e, (map.get(e) || 0) + 1);
    })
    const set = new Set();
    for (let [key, value] of map) {
        if (set.has(value)) {
            return false;
        }
        set.add(value);
    }
    return true;
};