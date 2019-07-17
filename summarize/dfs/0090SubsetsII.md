# 90. Subsets II

Given a collection of integers that might contain duplicates, **nums**, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
```

##### 2019.07.17

##### 	我的思路：

​		dfs，增加一个判断i == index，这样不会把连续重复的漏了

```javascript
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    addResult(res, [], 0, nums);
    return res;
};

function addResult(res, arr, index, nums) {
    let tmp = [...arr];
    res.push(tmp);
    for (let i = index, len = nums.length; i < len; i++) {
        if (i == index || nums[i] !== nums[i - 1]) {
            arr.push(nums[i]);
            addResult(res, arr, i + 1, nums);
            arr.pop();
        }
    }
}
```

##### 		别人的方法：

​		排序之后，计算每个重复值的个数，然后直接在之前result中的每个元素后面怼1-k个重复值。

```javascript
var subsetsWithDup = function(nums) {
    let res = [];
    let empty = [];
    res.push(empty);
    nums.sort((a, b) => a - b);
    for (let i = 0, len = nums.length; i < len; i++) {
        let duplicateCount = 1;
        while (((i + 1) < len) && nums[i + 1] === nums[i]) {
            duplicateCount++;
            i++;
        }
        for (let j = 0, preNum = res.length; j < preNum; j++) {
            let ele = [...res[j]];
            for (let k = 0; k < duplicateCount; k++) {
                ele.push(nums[i]);
                res.push([...ele]);
            } 
        }
    }
    return res;
}
```

