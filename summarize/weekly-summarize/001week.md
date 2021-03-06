# 31.Next Permutation

Implement **next permutation**, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be **in-place** and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

```
1,2,3` → `1,3,2`
`3,2,1` → `1,2,3`
`1,1,5` → `1,5,1
```

##### 2019.06.19

##### 	我的思路：

​	1.设最后一个元素为A，从倒数第二个元素B开始找，找B到A之间比到一个比B大的最小值tmp，并记录tmp的下标index。找不到转2，找到转3。

​	2.如果找不到，则B变成它前面一位的元素继续步骤1，如果遍历完了整个数组进入4。

​	3.如果找到了，将index右边的数组排序，得到结果。

​	4.说明此时数组已经是逆序了，直接sort（reverse更佳）。

​	时间复杂度O(n<sup>2</sup>)，遍历是n<sup>2</sup>， 排序也是n<sup>2</sup>。排序可以优化但是鉴于我太久没写排序了，写了个冒泡...

```javascript
var nextPermutation = function(nums) {
    let length = nums.length;
    for(let i = length - 2; i >= 0; i--){
        let now = nums[i];
        let tmp = Number.MAX_VALUE;
        let index = length;
        for(let j = length - 1; j > i; j--){
            if(nums[j] > now && nums[j] < tmp){
                tmp = nums[j];
                index = j;
            }
        }
        if(index < length){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            sort(nums, i + 1, length - 1);
            return nums;
        }
    }
    return nums.sort((a, b) => a - b);
};

function sort(arr, start, end){
    while(start < end){
        let tmp = start;
        while(tmp < end){
            if(arr[tmp] > arr[tmp + 1]){
                [arr[tmp], arr[tmp + 1]] = [arr[tmp + 1], arr[tmp]];
            };
            tmp++;
        }
        end--;
    }
}
```

##### 别人的写法

![ Next Permutation ](https://leetcode.com/media/original_images/31_nums_graph.png)

​	原理：从图中（图copy与leetcode原题solution），可以看出下一个全排列一定是处于a[i - 1]与a[i]交换后产生，按照常理认为需要排序下标i + 1到end的的数组项，而它们就是一个降序的，所以一个reserve即可。

​	时间复杂度O(n)，牛逼！

```javascript
var nextPermutation = function(nums) {
    let length = nums.length;
    let i, j;
    for(i = length - 2; i >= 0; i--){
        if(nums[i] < nums[i + 1]){
            break;
        }
    }
    if(i < 0){
        nums.reverse();
    }else{
        for(j = length - 1; j > i; j--){
            if(nums[j] > nums[i]){
                break;
            }
        }
        [nums[j], nums[i]] = [nums[i], nums[j]]
        let start = i + 1, end = length - 1;
        while(start < end){
            [nums[start++], nums[end--]] = [nums[end], nums[start]]
        }
    }
    return nums;
};
```

# 33.Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`).

You are given a target value to search. If found in the array return its index, otherwise return `-1`.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of *O*(log *n*).

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

##### 2019.06.20

##### 我的思路：

​	2分查找，疯狂的判断，由于判断过多，开销很大

```javascript
var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while(lo <= hi){
        if(target === nums[lo]){
            return lo;
        }
        if(target === nums[hi]){
            return hi;
        }
        let mid = lo + parseInt((hi - lo) / 2);
        if(nums[mid] === target){
            return mid;
        }
        if(nums[lo] < target){
            if(nums[mid] > target || nums[mid] < nums[lo]){
                hi = mid - 1;
            }else if(nums[mid] < target){
                lo = mid + 1;
            }
        }else{
            if(nums[hi] < target){
                return -1;
            }else{
                if(nums[mid] > target && nums[mid] < nums[hi]){
                    hi =  mid - 1;
                }else{
                    lo = mid + 1;
                }
            }
        }
    }
    return -1;
};
```

##### 别人的写法

##### 	方法1：

​	首先找到最小的那个值，把这个值作为逻辑上的数组起点，然后就进行2分查找

​	（本来我也想到要找到最小值，然后把最小值当逻辑起点的，结果一时没想好用logn的算法找最小值，实属太菜了）

```javascript
var search = function(nums, target){
    let lo = 0, n = nums.length, hi = n - 1;
    while(lo < hi){
        let mid = parseInt((lo + hi) / 2);
        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    let offset = lo;
    lo = 0, hi = n - 1;
    while(lo <= hi){
        let mid = parseInt((lo + hi) / 2);
        let realmid = (mid + offset) % n;
        if(nums[realmid] == target){
            return realmid;
        }
        if(nums[realmid] < target){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return -1;
}
```

​	按照这个思路自己写了份，差别很小，就是第二次遍历的时候lo和hi值变了下，真实的mid值取模

```javascript
var search = function(nums, target){
    let lo = 0, n = nums.length, hi = n - 1;
    while(lo < hi){
        let mid = parseInt((lo + hi) / 2);
        if(nums[mid] > nums[hi]){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    hi = lo + n - 1;
    while(lo <= hi){
        let mid = parseInt((lo + hi) / 2);
        let realmid = mid % n;
        if(nums[realmid] === target){
            return realmid;
        }
        if(nums[realmid] < target){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return -1;
}
```

##### 	方法2(最牛逼的)：

​	难受的是没看懂

```javascript
var search = function(nums, target){
    let lo = 0, hi = nums.length;
    while(lo < hi){
        let mid = parseInt((lo + hi) / 2);
        if((nums[0] > target) ^ (nums[0] > nums[mid]) ^ (target > nums[mid])){
            lo = mid + 1;
        }else{
            hi = mid;
        }
    }
    return lo === hi && nums[lo] === target ? lo : -1;
}
```

# 58.Length of Last Word

Given a string *s* consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

**Note:** A word is defined as a character sequence consists of non-space characters only.

**Example:**

```
Input: "Hello World"
Output: 5
```

##### 2019.06.21

##### 我的思路：

##### 方法1：

​	 把s按" "来split成数组，判断最后一项的长度

```javascript
var lengthOfLastWord = function(s) {
    s = s.trim()
    let arr = s.split(" ");
    if(arr.length == 1){
        return s.length;
    }
    return arr.pop().length;
};
```

##### 方法2：

​	从后往前找，找到用length的值来判断遇到的" "是不是字符串尾部的。

```javascript
var lengthOfLastWord = function(s) {
    let length = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === " "){
            if(length === 0){
                continue;
            }else{
                return length;
            }
        }else{
            length++;
        }
    }
    return length;
};
```

​	用while写就是：

```javascript
var lengthOfLastWord = function(s) {
    let res = 0;
    let index = s.length - 1;
    while(index >= 0 && s[index] === " "){
        index--;
    }
    while(index >= 0 && s[index] !== " "){
        res++;
        index--;
    }
    return res;
};
```

##### 别人的思路：

​	我都已经想到从后往前找了，我应该能想到的QAQ

```javascript
var lengthOfLastWord = function(s) {
    s = s.trim();
    let i = s.lastIndexOf(" ");
    return s.length - 1 - i;
};
```

# 36.Valid Sudoku

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the 9 `3x3` sub-boxes of the grid must contain the digits `1-9` without repetition.

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

**Example 1:**

```
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
```

**Example 2:**

```
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.
- The given board contain only digits `1-9` and the character `'.'`.
- The given board size is always `9x9`.

##### 2019.05.27

##### 我的思路：

​	 用一个长度为10的整形数组代替set的作用（用10是因为我不想求下标的时候再用数独项的值减"1"了）。

​	本意是把横向和纵向和数独块的判断放一个O(n<sup>2</sup>)的循环，由于不想声明第二个arr，导致分别循环的。（我可真是傻逼）。

​	时间复杂度O(n<sup>2</sup>) [同样是n<sup>2</sup>，比其他方法的开销大不少]

```javascript
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let arr = new Array(10).fill(0);
        for(let num of board[i]){
            if(num === "."){
                continue;
            }else{
                if(arr[num] == 0){
                    arr[num]++;
                }else{
                    return false;
                }
            }
        }
        arr = new Array(10).fill(0);
        for(let j = 0; j < 9; j++){
            let num = board[j][i];
            if(num === "."){
                continue;
            }else{
                if(arr[num] == 0){
                    arr[num]++;
                }else{
                    return false;
                }
            }
        }
    }
    let i = 0;
    let times = 0;
    while(times < 3){
        let arr = new Array(10).fill(0);
        for(let j = 0; j < 3; j++){
            for(let k = 0; k < 3; k++){
                let num = board[i + j][times * 3 + k];
                if(num === "."){
                    continue;
                }else{
                    if(arr[num] == 0){
                        arr[num]++;
                    }else{
                        return false;
                    }
                }
            }
        }
        i += 3;
        times += parseInt(i / 9);
        i %= 9;
    }
    return true;
};
```

##### 别人的方法：

##### 	方法1：

​	声明了3个数组，然后在两层循环里面一次完事

```javascript
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let row = new Array(10).fill(0);
        let column = new Array(10).fill(0);
        let block = new Array(10).fill(0);
        for(let j = 0; j < 9; j++){
            let rowtmp = board[i][j];
            if(rowtmp !== "."){
                if(row[rowtmp] == 0){
                    row[rowtmp]++;
                }else{
                    return false;
                }
            }
            let coltmp = board[j][i];
            if(coltmp !== "."){
                if(column[coltmp] == 0){
                    column[coltmp]++;
                }else{
                    return false;
                }
            }
            let rowIndex = 3 * parseInt(i / 3);
            let colIndex = 3 * (i % 3);
            let bloTmp = board[rowIndex + parseInt(j / 3)][colIndex + j % 3];
            if(bloTmp !== "."){
                if(block[bloTmp] == 0){
                    block[bloTmp]++;
                }else{
                    return false;
                }
            }
        }
    }
    return true;
};
```

​	又老老实实用set写了一遍

```javascript
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let row = new Set();
        let column = new Set();
        let block = new Set();
        for(let j = 0; j < 9; j++){
            let rowtmp = board[i][j];
            if(rowtmp !== "." ){
                if(row.has(rowtmp)){
                    return false;
                }else{
                    row.add(rowtmp)
                }
            }
            let coltmp = board[j][i];
            if(coltmp !== "." ){
                if(column.has(coltmp)){
                    return false;
                }else{
                    column.add(coltmp)
                }
            }
            let rowIndex = 3 * parseInt(i / 3);
            let colIndex = 3 * (i % 3);
            let bloTmp = board[rowIndex + parseInt(j / 3)][colIndex + j % 3];
            if(bloTmp !== "." ){
                if(block.has(bloTmp)){
                    return false;
                }else{
                    block.add(bloTmp)
                }
            }
        }
    }
    return true;
};
```

##### 	方法2：

​	上面的方法声明3个set（或数组），就是为了区分各行、各列各块的项。于是某一个高手就用给数值加些标记来区分它是哪行、哪列、哪块。

```javascript
var isValidSudoku = function(board) {
    let set = new Set();
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            let num = board[i][j];
            if(num !== "."){
                if(set.has(num + "in row " + i) || set.has(num + "in column " + j) || set.has(num + "in block " + parseInt(i / 3) + "-" + parseInt(j / 3))){
                    return false;
                }else{
                    set.add(num + "in row " + i);
                    set.add(num + "in column " + j);
                    set.add(num + "in block " + parseInt(i / 3) + "-" + parseInt(j / 3));
                }
            }
        }
    }
    return true;
}
```

# 39.Combination Sum

Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number of times.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

##### 2019.06.22

##### 我的思路：

##### 	方法1：

​	 回溯，把target一次次分解下，如果出现target < num，说明得不到合适的组合，就返回。值得注意的是为了防止算重复，把candidates排序了，并且在每次迭代从传了遍历起始的下标

​	时间复杂度O(n！)，因为存在n！种结果，每一种都算了。

```javascript
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.unshift(num);
                res.push(arr);
            }
        }else{
            continue;
        }
    }
    return res;
};

function find(candidates, target, index = 0){
    let res = [];
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.unshift(num);
                res.push(arr);
            }
        }else{
            continue;
        }
    }
    return res;
}
```

​	另外一种写法，把unshift换成了push，因为unshift的开销大一些，换成push直接在结果的中的每个集合顺序逆序了下。

##### 	方法2：

​	方法1是分解到最后结果之后，把结果一层层返回，在最外层合成最后的数组。方法2每次都循环都把当前数组和结果list传进去。直接迭代到最后，分解到不再可以划分后，把当前结果push进入口的数组，然后把这个数组假如结果list。值得注意的是，需要复制数组，不可直接操作入口数组！

```javascript
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            find(res, [num] ,candidates, target - num, i);
        }else{
            return res;
        }
    }
    return res;
};

function find(result, arr, candidates, target, index = 0){
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            let newArr = [...arr];
            newArr.push(num);
            result.push(newArr);
        }else if(num < target){
            let newArr = [...arr];
            newArr.push(num);
            find(result, newArr, candidates, target - num, i);
        }else{
            return;
        }
    }
}
```

##### 题外话：

​	本来不想定义另一个方法，直接在combinationSum中迭代的，给参数赋默认值，使得第一次迭代不缺参数。但是由于此题的candidates并不是排好序的，如果每次迭代重新排序开销太大，所以声明了一个find函数。

# 40.Combination Sum II

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

##### 2019.06.23

##### 我的思路：

​	跟39题一样，要注意的事移动下标去重，先排序，每个相同的数字只算第一碰到的结果，后面相同的全部跳过。

```javascript
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let i = 0;
    let l = candidates.length;
    while(i < l){
        let num = candidates[i];
        if(num == target){
            res.push([num]);
        }else if(num < target){
            find(candidates, target - num, i + 1, [num], res);
        }else{
            return res;
        }
        i++;
        while(i < l && candidates[i] == candidates[i - 1]){
            i++;
        }

    }
    return res;
};

function find(candidates, target, index, arr, res){
    let l = candidates.length;
    while(index < l){
        let num = candidates[index];
        if(num == target){
            res.push(cpArrAndPush(arr, num));
            return;
        }else if(num < target){
            find(candidates, target - num, index + 1, cpArrAndPush(arr, num), res);
        }else{
            return ;
        }
        index++;
        while(index < l && candidates[index] == candidates[index - 1]){
            index++;
        }
    }
}

function cpArrAndPush(arr, num){
    let newArr = [...arr];
    newArr.push(num);
    return newArr;
}
```