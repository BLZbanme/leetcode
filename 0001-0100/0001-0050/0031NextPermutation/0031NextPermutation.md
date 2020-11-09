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

#### 2020.11.10

##### redo

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const N = nums.length;
    let i = N - 1;
    while (i > 0) {
        if (nums[i] > nums[i - 1]) {
            break;
        }
        i--
    }
    if (!i) {
        for (let i = 0; i < N >> 1; i++) {
            [nums[i], nums[N - i - 1]] = [nums[N - i - 1], nums[i]]
        }
    }
    else {
        let index = binarySearch(nums, nums[i - 1], i, N - 1);
        [nums[index], nums[i - 1]] = [nums[i - 1], nums[index]]
        let j = N - 1;
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j--;
            i++;
        }
    }
    return;
};

function binarySearch(arr: Array<number>, target: number, lo: number, hi: number): number {
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return hi;
}
```

