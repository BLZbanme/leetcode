# 209. Minimum Size Subarray Sum

Given an array of **n** positive integers and a positive integer **s**, find the minimal length of a **contiguous** subarray of which the sum ≥ **s**. If there isn't one, return 0 instead.

**Example:** 

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

**Follow up:**

If you have figured out the *O*(*n*) solution, try coding another solution of which the time complexity is *O*(*n* log *n*). 

##### 2019.09.12

##### 	我的思路：

​		用一个数组记录，从某个点开始当前长度的序列的和，然后判断这个和是否大于等于s，若大于等于直接返回当前长度。

```javascript
var minSubArrayLen = function(s, nums) {
    if (!nums) {
        return 0;
    }
    if (nums.some(e => e >= s)) {
        return 1;
    }
    let dp = Array.from(nums);
    for (let i = 1, N = nums.length; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j] += nums[j + i];
            if (dp[j] >= s) {
                return i + 1;
            } 
        }
    }
    return 0;
};
```

##### 	别人的方法：

##### 方法1：

​	双指针法，用min记录当前的长度，从0点开始扩张数组的长度，发现数组的和大于等于s后，收缩数组的左边，得到最后大于s的值对应的长度就是当前子序列的长度！

​	时间复杂度O(n)

```javascript
var minSubArrayLen = function(s, nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    let i = 0;
    let j = 0;
    let sum = 0;
    let min = Infinity;
    while (j < nums.length) {
        sum += nums[j++];
        while (sum >= s) {
            min = Math.min(min, j - i);
            sum -= nums[i++];
        }
    }
    return min === Infinity ? 0 : min;
}
```

##### 2020.06.28

redo

学到了新招数，二分查找（标准二分查找可以找到需要找大于等于该值的index！）

```javascript
var minSubArrayLen = function(s, nums) {
    const N = nums.length;
    const sums = new Array(N + 1);
    sums[0] = 0;
    for (let i = 1; i <= N; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }

    let result = Infinity;

    for (let i = 1; i <= N; i++) {
        let target = s + sums[i - 1];
        let index = binarySearch(sums, target);
        if (index === N + 1) {
            break;
        }
        if (index <= N) {
            result = Math.min(result, index - i + 1);
        }
    }

    return result === Infinity ? 0 : result;
}

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length;
    
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return lo;
}
```

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

##### 我的思路：

​	堆排序，时间复杂度O(nlogn)

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

##### 改进

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

# 718.Maximum Length of Repeated Subarray

Given two integer arrays `A` and `B`, return the maximum length of an subarray that appears in both arrays.

**Example 1:**

```
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].
```

 

**Note:**

1. 1 <= len(A), len(B) <= 1000
2. 0 <= A[i], B[i] < 100

##### 2020.07.01

##### 我的思路：

​	我的dp思路有问题

#### 别人的方法：

```javascript
var findLength = function(A, B) {
    const N = A.length;
    const M = B.length;
    const dp = new Array(M + 1).fill(0);

    let max = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = M; j >= 1; j--) {
            if (A[i - 1] === B[j - 1]) {
                dp[j] = dp[j - 1] + 1;
            }
            max = Math.max(dp[j] , max);
        }
    }
    return max;
}
```

