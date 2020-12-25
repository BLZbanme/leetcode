function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let result = 0;
    let i = 0;
    let j = 0;
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            result++;
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    return result;
};

console.log(findContentChildren([10,9,8,7], [5,6,7,8])) //2
console.log(findContentChildren([1, 2, 3], [1, 1])) //1
console.log(findContentChildren([1, 2], [1, 2, 3])) //2