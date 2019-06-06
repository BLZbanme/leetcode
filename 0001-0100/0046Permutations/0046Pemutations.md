Given a collection of **distinct** integers, return all possible permutations.

**Example:**

```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

##### 2019.06.02

##### 	我的思路：

​	 递归。注意的事总要复制数组来解除引用。

​	时间复杂度O(n！)，因为存在n！种结果，每一种都算了。

```javascript
var permute = function(nums) {
    let set = new Set(nums);
    let result = [];
    addAgain(result, [], set);
    return result;
};

function addAgain(res, arr, set){
    if(set.size == 0){
        res.push(arr);
        return;
    }
    set.forEach(e => {
        let now = new Set(set);
        let newArr = arr.concat();
        newArr.push(e);
        now.delete(e)
        addAgain(res, newArr, now);
    });
}
```

##### 别人的思路：

​	回溯。暂时我还没看懂的（写于2019.06.02）