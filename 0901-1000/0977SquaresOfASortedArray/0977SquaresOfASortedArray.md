Given an array of integers `A` sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

**Example 1:**

```
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
```

**Example 2:**

```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

**Note:**

1. `1 <= A.length <= 10000`
2. `-10000 <= A[i] <= 10000`
3. `A` is sorted in non-decreasing order.

##### 2019.06.09

##### 	我的思路：

​	查找到第一个非负项，然后从这项向两边延展。

​	时间复杂度O(n)

```javascript
var sortedSquares = function(A) {
    let index = 0;
    let result = [];
    let length = A.length;
    for(let i = 0; i < length; i++){
        if (A[i] >= 0 || i == length - 1){
            let left = 1;
            let right = 0;
            while(index - left >= 0 && index + right < A.length){
                if(A[index - left] + A[index + right] <= 0){
                    result.push(A[index + right] ** 2);
                    right++;
                }else{
                    result.push(A[index - left] **2);
                    left++;
                }
            }
            while(index - left >= 0){
                result.push(A[index - left] **2);
                left++;
            }
            while(index + right < A.length){
                result.push(A[index + right] ** 2);
                right++;
            }
            return result;
        }else{
            index++;
        }
    }
};
```
