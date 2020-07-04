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

# 378. Kth Smallest Element in a Sorted Matrix

Given a *n* x *n* matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

**Example:**

```
matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

return 13.
```



**Note:**
You may assume k is always valid, 1 ≤ k ≤ n2.

##### 2020.07.02

#### 我的思路：

堆排序，复杂度O(n<sup>2</sup>logn<sup>2</sup>)

```javascript
var kthSmallest = function(matrix, k) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return;
    }
    const N = matrix.length;
    const LEN = N * N;
    for (let i = LEN >> 1; i >= 1; i--) {
        sink(i, LEN, N, matrix)
    }

    let tmp = 1;
    while (tmp < k) {
        let a = Math.floor((LEN - tmp) / N);
        let b = (LEN - tmp) % N;
        [matrix[0][0], matrix[a][b]] =  [matrix[a][b], matrix[0][0]];
        sink(1, LEN - tmp, N, matrix);
        tmp++;
    }
    return matrix[0][0];
};

function sink(index, length, N, matrix) {
    while ((index << 1) <= length) {
        let j = index << 1;
        let a1 = Math.floor((j - 1) / N);
        let b1 = (j - 1) % N;
        
        if (j < length) {
            let a2 = Math.floor(j / N);
            let b2 = j % N;
            if (matrix[a1][b1] > matrix[a2][b2]) {
                j++;
                a1 = a2;
                b1 = b2;
            }
        }
        let c = Math.floor((index - 1) / N);
        let d = (index - 1) % N;
        if (matrix[c][d] <= matrix[a1][b1]) {
            break;
        }
        [matrix[c][d], matrix[a1][b1]] = [matrix[a1][b1], matrix[c][d]];
        index = j;
    }
}
```

#### 别人的方法：

值域二分查找

```javascript
var kthSmallest = function(matrix, k) {
    const N = matrix.length;
    let left = matrix[0][0];
    let right = matrix[N - 1][N - 1];
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        if (check(matrix, mid, k, N)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

function check(matrix, mid, k, n) {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
            num += i + 1;
            j++;
        }
        else {
            i--;
        }
    }
    return num >= k;
}
```

# 23.Merge k Sorted Lists

Merge *k* sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

**Example:**

```
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```

#### 2020.07.02

#### 我的思路：

#### 堆排序

#### 版本1：

```javascript
var mergeKLists = function(lists) {
    let len = lists.length;
    lists.unshift(null);

    for (let k = len; k >= 1; k--) {
        if (!lists[k]) {
            [lists[k], lists[len--]] = [lists[len], lists[k]];
        }
        sink(k, len, lists);
    }

    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (true) {
        if (!lists[1]) {
            break;
        }
        cur.next = lists[1];
        cur = cur.next;
        lists[1] = lists[1].next;
        if (!lists[1]) {
            [lists[1], lists[len--]] = [lists[len], lists[1]];
        }
        sink(1, len, lists);
    }
    return fakeHead.next;
};

function sink(i, length, list) {
    while (i << 1 <= length) {
        let j = i << 1;
        if (j < length && list[j].val > list[j + 1].val) {
            j++;
        }
        if (list[i].val <= list[j].val) {
            break;
        }
        [list[i], list[j]] = [list[j], list[i]];
        i = j;
    }
}

```

#### 版本2：

```javascript
class MinPQ {

    constructor() {
        this.size = 0;
        this.pq = [];
    }

    isEmpty() {
        return this.size === 0;
    }

    get length() {
        return this.size;
    }

    insert(obj) {
        this.pq[++this.size] = obj;
        this.swim(this.size);
    }

    delMin() {
        if (!this.isEmpty()) {
            let result =  this.pq[1];
            this.exch(1, this.size);
            this.pq[this.size--] = null;
            this.sink(1);
            return result;
        }
    }

    swim(k) {
        while (k > 1 && this.pq[k].val < this.pq[Math.floor(k / 2)].val) {
            let khalf = Math.floor(k / 2);
            this.exch(k, khalf);
            k = khalf;
        }
    }

    sink(k) {
        while (2 * k <= this.size) {
            let j = 2 * k;
            if (j < this.size && this.pq[j].val > this.pq[j + 1].val) {
                j++;
            }
            if (this.pq[k].val <= this.pq[j].val) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

    exch(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }
}

var mergeKLists = function(lists) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    const pq = new MinPQ();

    for (let list of lists) {
        if (list) {
            pq.insert(list);
        }   
    }

    while (!pq.isEmpty()) {
        cur.next = pq.delMin();
        cur = cur.next;
        if (cur.next) {
            pq.insert(cur.next);
        }
    }

    return fakeHead.next;
}
```

#### 别人的写法

经典归并

```javascript
var mergeKLists = function(lists) {
    if (!lists || !lists.length) {
        return null;
    }

    return merge(lists, 0, lists.length - 1);
}

function merge(lists, left, right) {
    if (left == right) {
        return lists[left];
    }
    if (left > right) {
        return null;
    }
    let mid = left + ((right - left) >> 1);
    let l1 = merge(lists, left, mid);
    let l2 = merge(lists, mid + 1, right);
    return mergeTwoLists(l1, l2);
}

function mergeTwoLists(l1, l2) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }
        else {
            cur.next = l2;
            l2 = l2.next;  
        }
        cur = cur.next;
    }
    while (l1) {
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }

    while (l2) {
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }
    return fakeHead.next;
}
```

# 32. Longest Valid Parentheses

Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

**Example 1:**

```
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
```

**Example 2:**

```
Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
```

##### 2020.07.04

##### 我的思路：

​	动态规划

时间复杂度O(n)，空间复杂度O(n)

```javascript
var longestValidParentheses = function(s) {
    let max = 0;
    const N = s.length;
    const stack = [];
    const dp = new Array(N).fill(0);
    for (let i = 0; i < s.length;i++) {
        if (stack.length && stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
            let tmp = 2;
            let j = 1;
            if (dp[i - j]) {
                tmp += dp[i - j];
                j += dp[i - j];
            }
            if (i - tmp >= 0 && dp[i - tmp] != 0) {
                dp[i] = dp[i - tmp] + tmp;
            }
            else {
                dp[i] = tmp;
            }
            max = Math.max(max, dp[i]);
        }
        else {
           stack.push(s[i]);
        }
    }
    return max;
};
```

##### 别人的写法

方法1：stack，存储左括号的下标

时间复杂度O(n)，空间复杂度O(n)

```javascript
var longestValidParentheses = function(s) {
    let max = 0;
    const N = s.length;
    const stack = [-1];
    for (let i = 0; i < N; i++) {
        if (s[i] == '(') {
            stack.push(i);
        }
        else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            }
            else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    
    return max;
};
```

方法2：左右指针，来回遍历

时间复杂度O(n)，空间复杂度O(1)

```javascript
var longestValidParentheses = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == '(') {
            left++;
        }
        else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, 2 * right);
        }
        else if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        }
        else {
            right++;
        }
        if (left == right) {
            max = Math.max(max, 2 * left);
        }
        else if (left > right) {
            left = right = 0;
        }
    }

    return max;
}
```

