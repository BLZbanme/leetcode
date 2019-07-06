# 78. Subsets

Given a set of **distinct** integers, *nums*, return all possible subsets (the power set).

**Note:** The solution set must not contain duplicate subsets.

**Example:**

```
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```

##### 2019.07.05

##### 	我的思路：

​	回溯法

```javascript
var subsets = function(nums) {
    let res = [];
    add(res, [], nums, 0);
    res.push([]);
    return res;
};

function add(res, arr, nums, index) {
    for(let i = index; i < nums.length; i++){
        let arrClone = [...arr];
        arrClone.push(nums[i]);
        res.push(arrClone);
        add(res, arrClone, nums, i + 1);
    }
}
```
