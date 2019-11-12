# 303. Range Sum Query - Immutable

Given an integer array *nums*, find the sum of the elements between indices *i* and *j* (*i* ≤ *j*), inclusive.

**Example:**

```
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
```

**Note:**

1. You may assume that the array does not change.
2. There are many calls to *sumRange* function.

##### 2019.07.07

##### 	我的思路：

##### 	方法1（超时了）：

​	用一个上三角存储i -> j的距离。

​	反思：初始化的时候里面两个for循环的开销太大了，没必要。

```javascript
var NumArray = function(nums) {
    let len = nums.length;
    var tmpArray = new Array(len);
    for(let i = 0; i < len; i++){
        tmpArray[i] = new Array(len);
    }
    for(let i = 0; i < len; i++){
        tmpArray[i][i] = nums[i];
        for(let j = i + 1; j < len; j++){
            tmpArray[i][j] = tmpArray[i][j - 1] +  nums[j];
        }
    }
    this.tmpArray = tmpArray;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tmpArray[i][j];
};
```

##### 	方法2：

​	用一个数组存储起点i的下一位到 j点的距离，但是这样为了判断从0到j是很麻烦的。于是有了方法3

```javascript
var NumArray = function(nums) {
    let len = nums.length;
    var tmpArray = new Array(len);
    tmpArray[0] = nums[0];
    for(let i = 1; i < len; i++){
        tmpArray[i] = tmpArray[i - 1] + nums[i];
    }
    this.tmpArray = tmpArray;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tmpArray[j] - (i > 0 ? this.tmpArray[i - 1] : 0);
};
```

##### 别人的写法：

##### 	方法3：

​	tmpArray数组中存储了从起点到j - 1点的距离。

```javascript
var NumArray = function(nums) {
    let len = nums.length;
    var tmpArray = new Array(len + 1);
    tmpArray[0] = 0;
    for(let i = 0; i < len; i++){
        tmpArray[i + 1] = tmpArray[i] + nums[i];
    }
    this.tmpArray = tmpArray;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.tmpArray[j + 1] - this.tmpArray[i];
};
```