function smallerNumbersThanCurrent(nums: number[]): number[] {
    const N = nums.length;
    const map = new Map();
    nums.forEach(e => {
        map.set(e, (map.get(e) || 0) + 1)
    })
    const keys = Array.from(map.keys()).sort((a, b) => a - b);
    let sum = 0;
    for (let key of keys) {
        let tmp = map.get(key);
        map.set(key, sum);
        sum += tmp;
    }
    return nums.map(e => map.get(e));
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3])); //[4,0,1,1,3]

console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); //[2,1,0,3]

console.log(smallerNumbersThanCurrent([7,7,7,7])); //[0 , 0, 0, 0]