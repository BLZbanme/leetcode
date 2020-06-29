# 215. Kth Largest Element in an Array

Find the **k**th largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

**Example 1:**

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

**Example 2:**

```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

**Note:**
You may assume k is always valid, 1 ≤ k ≤ array's length.

##### 2020.06.29

##### 	我的思路：

​	堆排序，时间复杂度O(nlogn)

​	1:如果偷了第一家，就不能偷到最后一家。dp的下标范围就是0->len-2.

​	2:如果要偷最后一家的话，就从第二家开始偷起。dp的下标范围就是1->len-1.

​	最后比较这两种情况的大小，返回最大值。

​	时间复杂度O(n)

```javascript
var findKthLargest = function(nums, k) {
    nums.unshift(0);
    swim(nums);
    let result;
    while (k--) {
        [nums[1], nums[nums.length - 1]] = [nums[nums.length - 1], nums[1]];
        result = nums.pop();
        if (!k) {
            return result;
        }

        sink(nums, 1);
    }
};

function swim(arr) {
    const N = arr.length;
    let i = N >> 1;
    while (i >= 1) {
        sink(arr, i);
        i--;
    }
}

function sink(arr, i) {
    while (i < arr.length) {
        let j = 2 * i;
        if (j > arr.length) {
            break;
        }
        if (j < arr.length - 1 && arr[j + 1] > arr[j]) {
            j += 1;
        }
        if (arr[i] < arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        i = j;
    }
}
```

##### 	改进

​	标准一点的堆排序

```javascript
var findKthLargest = function(nums, k) {
    let N = nums.length;
    nums = [0, ...nums];

    for (let i = N >> 1; i >= 1; i--) {
        sink(nums, i, N);
    }

    let j = k;
    while (j--) {
        [nums[1], nums[N--]] = [nums[N], nums[1]];
        sink(nums, 1, N);
    }

    return nums[nums.length - k];
};

function sink(arr, k, N) {
    while (2 * k <= N) {
        let j = 2 * k;
        if (j < N && arr[j] < arr[j + 1]) {
            j++;
        }
        if (arr[k] >= arr[j]) {
            break;
        }
        [arr[k], arr[j]] = [arr[j], arr[k]];
        k = j;
    }
}
```

#### 别人的方法：

​	对快排partition的理解，因为每轮parition后返回的下标的项必然已经是在它的最终排序位置了，所以如果它的下标为k时，说明它就是我们要找的值。如果小于k，我们就继续划分的左半边，如果大于k就找右半边。

 	shuffle函数是为了打乱数组的顺序，减少快排最差情况（基本有序）的影响。

```javascript
var findKthLargest = function(nums, k) {
    shuffle(nums);
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let j = partition(nums, lo, hi);
        if (j < k) {
            lo = j + 1;
        }
        else if (j > k) {
            hi = j - 1;
        }
        else {
            break;
        }
    }
    return nums[k];
}

function partition(arr, lo, hi) {
    let i = lo;
    let j = hi + 1;
    while (true) {
        while (i < hi && arr[++i] < arr[lo]) {};
        while (j > lo && arr[--j] > arr[lo]) {};
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}

function shuffle(arr) {
    const N = arr.length;
    for (let i = 1; i < N; i++) {
        let tmp = Math.floor((N - 1) * Math.random());
        [arr[i], arr[tmp]] = [arr[tmp], arr[i]];
    }
}
```

