# 493.Reverse Pairs

Given an array `nums`, we call `(i, j)` an ***important reverse pair\*** if `i < j` and `nums[i] > 2*nums[j]`.

You need to return the number of important reverse pairs in the given array.

**Example1:**

```
Input: [1,3,2,3,1]
Output: 2
```



**Example2:**

```
Input: [2,4,3,5,1]
Output: 3
```



**Note:**

1. The length of the given array will not exceed `50,000`.
2. All the numbers in the input array are in the range of 32-bit integer.

#### 2020.11.28

#### 	我的思路：

知道是归并，但是没写出来！

#### 别人的写法：

```javascript
function reversePairs(nums: number[]): number {
    let count = 0;

    function helper(lo: number, hi: number) {
        if (lo >= hi) {
            return;
        }
        let mid = lo + Math.floor((hi - lo) >> 1);
        helper(lo, mid);
        helper(mid + 1, hi);
        let i = lo;
        let j = mid + 1;
        while (i <= mid && j <= hi) {
            if (nums[i] > 2 * nums[j]) {
                count += mid - i + 1;
                j++;
            }
            else {
                i++;
            }
        }
        i = lo;
        j = mid + 1;
        const temp = Array(hi - lo + 1);
        for (let k = 0; k <= hi - lo; k++) {
            if (i > mid) {
                temp[k] = nums[j++];
            }
            else if (j > hi) {
                temp[k] = nums[i++];
            }
            else if (nums[i] < nums[j]) {
                temp[k] = nums[i++];
            }
            else {
                temp[k] = nums[j++];
            }
        }
        for (let i = lo, k = 0; i <= hi; i++, k++) {
            nums[i] = temp[k];
        }
        return;
    }
    helper(0, nums.length - 1)
    return count;    
};
```

