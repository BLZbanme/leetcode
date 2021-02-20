/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const degree = Math.max(...Array.from(map.values()));
    map.clear();

    let left = 0;
    const n = nums.length;
    
    let res = Infinity;
    for (let right = 0; right < n; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        while (Math.max(...Array.from(map.values())) === degree) {
            res = Math.min(res, right - left + 1);
            let pre = map.get(nums[left]);
            map.set(nums[left++], pre - 1);
        }
    }

    return res;
};

var findShortestSubArray = function(nums) {
    const leftMap = new Map();
    const rightMap = new Map();
    const countMap = new Map();
    let degree = 0;
    nums.forEach((e, index) => {
        if (!leftMap.has(e)) {
            leftMap.set(e, index);
        }
        rightMap.set(e, index);
        countMap.set(e, (countMap.get(e) || 0) + 1);
        degree = Math.max(degree, countMap.get(e));
    })

    let res = nums.length;
    for (const [key, value] of countMap) {
        if (value === degree) {
            res = Math.min(res, rightMap.get(key) - leftMap.get(key) + 1);
        }
    }
    return res;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1])) //2
console.log(findShortestSubArray([1,2,2,3,1,4,2])) //6