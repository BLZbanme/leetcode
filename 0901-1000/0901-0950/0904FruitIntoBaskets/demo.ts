function totalFruit1(tree: number[]): number {
    const map = new Map();
    let result = 0;
    let left = 0;
    for (let i = 0; i < tree.length; i++) {
        map.set(tree[i], (map.get(tree[i]) || 0) + 1);
        while (map.size > 2) {
            let tmp = map.get(tree[left]);
            if (tmp > 1) {
                map.set(tree[left], tmp - 1);
            }
            else {
                map.delete(tree[left]);
            }
            left++;
        }
        result = Math.max(result, i - left + 1);
    }
    return result;
};

function totalFruit(tree: number[]): number {
    const map = new Map();
    let result = 0;
    let left = 0;
    for (let i = 0; i < tree.length; i++) {
        map.set(tree[i], (map.get(tree[i]) || 0) + 1);
        if (map.size > 2) {
            let tmp = map.get(tree[left]);
            if (tmp > 1) {
                map.set(tree[left], tmp - 1);
            }
            else {
                map.delete(tree[left]);
            }
            left++;
        }
        else {
            result = Math.max(result, i - left + 1);
        }
    }
    return result;
};

console.log(totalFruit([1,2,1])) //3
console.log(totalFruit([0,1,2,2])) //3
console.log(totalFruit([1,2,3,2,2])) //4
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])) //5