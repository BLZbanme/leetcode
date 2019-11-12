# 238.Product of Array Except Self

Given an array `nums` of *n* integers where *n* > 1,  return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

**Example:**

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

**Note:** Please solve it **without division** and in O(*n*).

**Follow up:**
Could you solve it with constant space complexity? (The output array **does not** count as extra space for the purpose of space complexity analysis.)

##### 2019.10.29

##### 	我的思路：

不用除法我没思路

##### 别人的方法：

​	先用一个数组存储从左到右，到各个下标的乘积，然后存储一个从右到左乘积的值	

```javascript
var productExceptSelf = function(nums) {
    const N = nums.length;
    let res = new Array(N);
    res[0] = 1;
    for (let i = 1; i < N; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = N - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};
```

