# 315. Count of Smaller Numbers After Self

You are given an integer array *nums* and you have to return a new *counts* array. The *counts* array has the property where `counts[i]` is the number of smaller elements to the right of `nums[i]`.

**Example:**

```
Input: [5,2,6,1]
Output: [2,1,1,0] 
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```



##### 2020.07.11

##### 	我的思路：

​	无敌归并排序

```javascript
var countSmaller = function(nums) {
    const N = nums.length;
    if (!N) {
        return []
    }

    const newArr = Array(N);
    for (let i = 0; i < N; i++) {
        newArr[i] = {
            value: nums[i],
            index: i
        }
    }

    const count = Array(N).fill(0);
    const copy = Array(N);

    mergeSort(newArr, 0, N - 1, copy, count);

    return count;
};

function mergeSort(nums, lo, hi, tmp, count) {
    if (lo === hi) {
        return;
    }

    let mid = lo + ((hi - lo) >> 1);

    mergeSort(nums, lo, mid, tmp, count);
    mergeSort(nums, mid + 1, hi, tmp, count);

    merge(nums, lo, mid, hi, tmp, count);
}

function merge(nums, lo, mid, hi, tmp, count) {
    for (let i = lo; i <= hi; i++) {
        tmp[i] = nums[i]; 
    }

    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            nums[k] = tmp[j++];
        }
        else if (j > hi) {
            nums[k] = tmp[i++];
        }
        else if (tmp[i].value <= tmp[j].value) {
            nums[k] = tmp[i++];
        }
        else {
            for (let m = i; m <= mid; m++) {
                count[tmp[m].index]++;
            }
            nums[k] = tmp[j++];
        }
    }   
}
```
