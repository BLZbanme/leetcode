# 56. Merge Intervals

Given a collection of intervals, merge all overlapping intervals.

**Example 1:**

```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

**Example 2:**

```
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**NOTE:** input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

##### 2019.07.01

##### 我的思路：

​	再次给力了一回，写了个准标答。

​	先按照每个数组项第一个元素排序，然后在reduce的回调函数的第一个参数中每次记录上一次reduce的合并结果。

​	排序O(nlogn)，reduce O(n)，总的复杂度O(nlogn);

```javascript
var merge = function(intervals) {
    if(intervals.length == 0){
        return intervals;
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    res.push(intervals.reduce((acc, cur) => {
        if(acc[1] >= cur[0]){
            if(acc[1] < cur[1]){
                acc[1] = cur[1];
            }
            return acc;
        }else{
            res.push(acc);
            return cur;
        }
    }));
    return res;
};
```

# 59. Spiral Matrix II

Given a positive integer *n*, generate a square matrix filled with elements from 1 to *n*2 in spiral order.

**Example:**

```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

##### 2019.07.01

##### 我的思路：

​	老规矩递归

```javascript
var generateMatrix = function(n) {
    let res = new Array(n);
    for(let i = 0; i < n; i++){
        res[i] = new Array(n);
    }
    circle(res, 0, n, 1);
    return res;
};

function circle(res, index, width, num){
    for(let i = 0; i < width; i++){
        res[index][index + i] = num++;
    }
    for(let i = 1; i < width; i++){
        res[index + i][index + width - 1] = num++;
    }
    for(let i = width + index - 2; i > index; i--){
        res[index + width - 1][i] = num++;
    }
    for(let i = index + width - 1; i > index; i--){
        res[i][index] = num++;
    }
    width -= 2;
    if(width > 0){
        circle(res, index + 1, width, num);
    }
}
```

# 60. Permutation Sequence

The set `[1,2,3,...,n]` contains a total of *n*! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for *n* = 3:

1. `"123"`
2. `"132"`
3. `"213"`
4. `"231"`
5. `"312"`
6. `"321"`

Given *n* and *k*, return the *k*th permutation sequence.

**Note:**

- Given *n* will be between 1 and 9 inclusive.
- Given *k* will be between 1 and *n*! inclusive.

**Example 1:**

```
Input: n = 3, k = 3
Output: "213"
```

**Example 2:**

```
Input: n = 4, k = 9
Output: "2314"
```

##### 2019.07.02

##### 我的思路：

##### 	方法1：

​	写了一遍0031NextPermutation，但是由于当时可能没完全掌握，很多细节的地方没有写好，鲜血险些超时。

​	复杂度O(n<sup>2</sup>logn),遍历n次复杂度O(n),每次便利里面查找和排序O(nlogn),所以为O(n<sup>2</sup>logn）

```javascript
var getPermutation = function(n, k) {
    let arr = new Array(n).fill(0).map((v, i) => i + 1);
    while(k > 1){
        arr = findNextPermutation(arr);
        k--;
    }
    return arr.join("");
};

function findNextPermutation(permutation){
    let index = permutation.length - 2;
    while(index >= 0 && permutation[index] > permutation[index + 1]){
        index--;
    }
    let tmp = permutation[index];
    let pre = permutation.slice(0, index + 1);
    let aft = permutation.slice(index + 1);
    aft.sort((a, b) => a - b);
    for(var i = 0; i < aft.length; i++){
        if(aft[i] > tmp){
            break;
        }
    }
    permutation = pre.concat(aft);
    [permutation[index], permutation[index + i + 1]] = [permutation[index + i + 1], permutation[index]];
    return permutation;
}
```

##### 方法1优化:

​	用当时31题最优的思路实现，复杂度O(n<sup>2</sup>)，遍历n次复杂度O(n),每次遍历里面查找，交换，和逆序O(n)，得到O(n<sup>2</sup>)

```javascript
var getPermutation = function(n, k) {
    let arr = new Array(n).fill(0).map((v, i) => i + 1);
    while(k > 1){
        findNextPermutation(arr);
        k--;
    }
    return arr.join("");
};

function findNextPermutation(permutation){
    let len = permutation.length;
    let i = len - 2, j;
    while(i >= 0 && permutation[i] > permutation[i + 1]){
        i--;
    }
    for(j = len - 1; j > i; j--){
        if(permutation[j] > permutation[i]){
            break;
        }
    }
    [permutation[j], permutation[i]] = [permutation[i], permutation[j]];
    let start = i + 1, end = len - 1;
    while(start < end){
        [permutation[start++], permutation[end--]] = [permutation[end], permutation[start]];
    }
}
```

##### 方法2：

​	瞟了眼最高亮的思路的开头，理解之后自己写的。可以根据k判断一次次/(n-1)!，判断当前这个排列的开头是什么，然后从初始化存储已经未被使用的数字数组中去掉它。

​	时间复杂度O(n<sup>2</sup>)，遍历n次，每次里面要计算n次阶乘值。

```javascript
var getPermutation = function(n, k) {
    let res = [];
    let num = new Array(n).fill(0).map((v, i)=> i + 1);
    while(n > 1) {
        let fac = factorial(--n);
        let now = Math.ceil((k / fac)) - 1;
        res.push(num[now]);
        num.splice(now, 1);
        k -= fac * now;
    }
    res.push(num[0]);
    return res.join("");
}

function factorial(n){
    if(n == 1){
        return 1;
    }
    return n * factorial(n - 1);
}
```

##### 方法2优化：

​	最后看了下最高亮的答案，它有一个很亮眼的地方就是用一个阶乘数组存储了对应的阶乘值。这样复杂度就变成了O(n),求阶乘数组O(n),遍历n次O(n)，O(n) + O(n) 得到O(n)

```javascript
var getPermutation = function(n, k) {
    let res = [];
    let facArr = new Array(n);
    facArr[0] = 1;
    let sum = 1;
    for(let i = 1; i < n; i++){
        sum *= i;
        facArr[i] = sum;
    }
    let num = new Array(n).fill(0).map((v, i)=> i + 1);
    while(n > 1) {
        let fac = facArr[--n];
        let now = Math.ceil((k / fac)) - 1;
        res.push(num[now]);
        num.splice(now, 1);
        k -= fac * now;
    }
    res.push(num[0]);
    return res.join("");
}
```

# 61. Rotate List

Given a linked list, rotate the list to the right by *k* places, where *k* is non-negative.

**Example 1:**

```
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
```

**Example 2:**

```
Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL
```

##### 2019.07.03

##### 我的思路：

##### 方法1：

​	先遍历一遍，计算长度。然后再遍历一次找到k所在的位置，并标记他的前一项，然后改变链表。

​	时间复杂度O(n),实际是O(2n)=O(n),空间复杂度O(1).

```javascript
var rotateRight = function(head, k) {
    if(k == 0 || !head){
        return head;
    }
    let p = head, pre = null, len = 1;
    while(!!p.next){
        pre = p;
        p = p.next;
        len++;
    }
    k %= len;
    if(k == 0){
        return head;
    }
    let index = len - k + 1, res;
    p = head, len = 1;
    while(!!p.next){
        pre = p;
        p = p.next;
        len++;
        if(len == index){
            res = pre;
        }
    }
    p.next = head;
    head = res.next;
    res.next = null;
    return head;
};
```

##### 方法2:

​	遍历一遍计算长度，顺便把链表项存在一个数组里面，然后直接操作k对应的项。

​	时间复杂度O(n),空间复杂度O(n).

```javascript
var rotateRight = function(head, k){
    if(k == 0 || !head){
        return head;
    }
    let nodeArr = [];
    let p = head, i = 0;
    while(!!p){
        nodeArr[i++] = p;
        p = p.next;
    }
    k %= i;
    if(k == 0){
        return head;
    }
    let index = i - k;
    nodeArr[i - 1].next = head;
    head = nodeArr[index];
    nodeArr[index - 1].next = null;
    return head;
}
```

##### 方法3：

​	这是方法1的优化，第一次遍历完之后把链表的尾结点指向头结点成环。

​	然后，找到k对应项的前一项，进行处理。

​	优点是第二次遍历不用遍历完了，因为第一次成环时，把尾结点直接处理了。还有一处优化的部分是没设置前一项的指针（因为本来就没必要）

​	时间复杂度O(n),实际是O(n + k % n)=O(n),空间复杂度O(1).

```javascript
var rotateRight = function(head, k) {
    if(!head || k == 0){
        return head;
    }
    let p = head;
    let len = 1;
    while(!!p.next){
        p = p.next;
        len++;
    }
    p.next = head;
    k %= len;
    if(k != 0){
        for(let i = len - k; i > 0; i--){
            p = p.next;
        }
    }
    head = p.next;
    p.next = null;
    return head;
}
```

# 73. Rotate List

Given a *m* x *n* matrix, if an element is 0, set its entire row and column to 0. Do it [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**Example 2:**

```
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

**Follow up:**

- A straight forward solution using O(*mn*) space is probably a bad idea.
- A simple improvement uses O(*m* + *n*) space, but still not the best solution.
- Could you devise a constant space solution?

##### 2019.07.04

##### 我的思路：

##### 方法1：

​	先遍历一遍，用两个set，分别存储含0的行和列。

​	把两个set中含有的行和列置为0。

​	时间复杂度O(mn),空间复杂度O(m+n)。

```javascript
var setZeroes = function(matrix) {
    let rowSet = new Set();
    let colSet = new Set();
    matrix.forEach((arr, i) => {
        arr.forEach((v, j) => {
            if(v == 0){
                rowSet.add(i);
                colSet.add(j);
            }
        })
    });
    for(let r of rowSet){
        matrix[r].fill(0);
    }
    for(let c of colSet){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][c] = 0;
        }
    }
    return matrix;
};
```

##### 方法2:

​	遍历一遍数组，用各行各列的第一项是否为0来表示该行该列是否全为0。因为(0,0)项即表示第0行和第0列，所以我们设置让它代表第0行，再单独用个col0来表示第0列。

​	然后遍历除去第一行第一列的矩阵，把里面的项该置0的置0。

​	最后把第0行，第0列该置0的置0.	

​	时间复杂度O(mn),空间复杂度O(1).

```javascript
var setZeroes = function(matrix) {
    let col0 = 1, rows = matrix.length, cols = matrix[0].length;
    for(let i = 0; i < rows; i++){
        if(matrix[i][0] == 0){
            col0 = 0;
        }
        for(let j = 1; j < cols; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
    }
    if(matrix[0][0] == 0) {
        for(let i = 1; i < cols; i++){
            matrix[0][i] = 0;
        }
    }
    if(col0 == 0){
        for(let i = 0; i < rows; i++){
            matrix[i][0] = 0;
        }
    }
    return matrix;
}
```

##### 方法3：

​	这是方法2的写法优化的一下，代码行数变少了，但是可读性也变差了很多。

​	时间复杂度O(mn),空间复杂度O(1).

```javascript
var setZeroes = function(matrix) {
    let col0 = 1;
    for(let i = 0; i < rows; i++){
        if(matrix[i][0] == 0){
            col0 = 0;
        }
        for(let j = 1; j < cols; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for(let i = matrix.length - 1; i >= 0; i--){
        for(let j = matrix[0].length - 1; j >= 1; j--){
            if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
        if(col0 == 0) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
}
```

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

##### 我的思路：

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

# 54. Maximum Subarray

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

**Example:**

```
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

**Follow up:**

If you have figured out the O(*n*) solution, try coding another solution using the divide and conquer approach, which is more subtle.

##### 2019.07.06

##### 我的思路：

##### 方法1：

​	dp:

遍历的每项的当前最大值有两种情况：

​	1.如果它前一项的最大值小于0的话，当前项的最大值就是它本身。

​	2.如果它前一项的最大值大于0的话，当前项的最大值就是它本身+前一项的最大值。

然后每次求完当前项的最大值，就和max比较，把max赋成更大的值。

```javascript
var maxSubArray = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    let max = dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        dpArr[i] = nums[i] + (dpArr[i - 1] > 0 ? dpArr[i - 1] : 0);
        max = Math.max(max, dpArr[i]);
    }
    return max;
};
```

##### 方法2：

（这题的实际情况也可以不用dp数组存，用一个临时变量就可用存储前一项的最大值了）。

```javascript
var maxSubArray = function(nums) {
    let max = sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(sum < 0){
            sum = nums[i];
        }else{
            sum += nums[i];
        }
        max = Math.max(max, sum);
    }
    return max;
}
```

# 50. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

**Example 1:**

```
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
```

##### 2019.07.07

##### 我的思路：

##### 方法1：

​	dp，自底向上，dpArr存储每个点为止能到达的最远距离，如果当前点的前一点到不了它就返回false。

​	时间复杂度O(n),空间复杂度O(n)。

```javascript
var canJump = function(nums) {
    let len = nums.length;
    let dpArr = new Array(len);
    dpArr[0] = nums[0];
    for(let i = 1; i < len; i++){
        if(dpArr[i - 1] < i){
            return false;
        }
        dpArr[i] = Math.max(dpArr[i - 1], nums[i] + i);
    }
    return dpArr[len - 1] >= len - 1;
};
```

##### 别人的思路：

##### 方法2：

​	dp，自底向上，只用一个distance来存储前一个值能到达的最远距离即刻。

​	时间复杂度O(n),空间复杂度O(1)。

```javascript
var canJump = function(nums) {
    let len = nums.length;
    let distance = nums[0];
    for(let i = 1; i < len; i++){
        if(distance < i){
            return false;
        }
        distance = Math.max(distance, nums[i] + i);
    }
    return distance >= len - 1;
};
```

# 198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

**Example 1:**

```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
```

**Example 2:**

```
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
```

##### 2019.07.07

##### 我的思路：

##### 方法1:

​		dp: opt[i],表示在i坐标时最大的价值，他可以分为两种情况，

1. opt[i - 1]，表示我们不偷i坐标的财物，现在我们的累计经济就是opt[i - 1]

2. opt[i - 2] + v[i]，表示我们会偷i坐标的财物，现在我们的累计经济就是opt[I - 2] + v[i]

   我们比较取1,2的最大值，可以递归下去。但是递归会产生很多重复子问题，所以我采用自底向上的动态规划解法。

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    let opt = [];
    opt[0] = nums[0];
    opt[1] = Math.max(nums[0], nums[1]);
    for(var i = 2; i < len; i++){
        opt[i] = Math.max(opt[i - 2] + nums[i], opt[i - 1]);
    };
    return opt[len - 1];
};
```

##### 方法2:

​	优化用两个变量分别存储前一项和前第二项的位置的最大财产值。

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    let pre2 = nums[0];
    let pre1 = Math.max(nums[0], nums[1]);
    let max = pre1;
    for(var i = 2; i < len; i++){
        max = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = max;
    };
    return max;
};
```

# 0213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle.** That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police**.

**Example 1:**

```
Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
```

**Example 2:**

```
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
```

##### 2019.07.07

##### 我的思路：

​	本题是0198House Robber的修改版，我的思路就是分两种情况考虑，然后比较这两种情况的大小：

​	1:如果偷了第一家，就不能偷到最后一家。dp的下标范围就是0->len-2.

​	2:如果要偷最后一家的话，就从第二家开始偷起。dp的下标范围就是1->len-1.

​	最后比较这两种情况的大小，返回最大值。

​	时间复杂度O(n)

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    if(len == 2){
        return Math.max(...nums);
    }
    let pre2 = nums[0];
    let pre1 = Math.max(nums[0], nums[1]);
    let res1 = pre1;
    for(let i = 2; i < len - 1; i++){
        res1 = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res1;
    }
    pre2 = nums[1];
    pre1 = Math.max(nums[1], nums[2]);
    let res2 = pre1;
    for(let i = 3; i < len; i++){
        res2 = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res2;
    }
    return Math.max(res1, res2);
};
```

##### 	改进

​	把dp的过程抽成一个函数。

```javascript
var rob = function(nums) {
    let len = nums.length;
    if(len == 0){
        return 0;
    }
    if(len == 1){
        return nums[0];
    }
    if(len == 2){
        return Math.max(...nums);
    }
    return Math.max(dp(nums, 2, len - 1), dp(nums, 3, len));
};

function dp(nums, index, end) {
    let pre2 = nums[index - 2];
    let pre1 = Math.max(nums[index - 2], nums[index - 1]);
    let res = pre1;
    for(let i = index; i < end; i++){
        res = Math.max(pre2 + nums[i], pre1);
        pre2 = pre1;
        pre1 = res;
    }
    return res;
}
```

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

##### 我的思路：

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