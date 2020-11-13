function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map();
    let set = new Set(arr2);
    let tail = [];
    for (let i = 0; i < arr1.length; i++) {
        if (set.has(arr1[i])) {
            map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
        }
        else {
            tail.push(arr1[i]);
        }
    }
    let result: Array<number> = [];
    for (let i = 0; i < arr2.length; i++) {
        let count = map.get(arr2[i]);
        result = result.concat(Array(count).fill(arr2[i]));
    }
    tail.sort((a, b) => a - b);
    return result.concat(tail);
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))
//[2,2,2,1,4,3,3,9,6,7,19]