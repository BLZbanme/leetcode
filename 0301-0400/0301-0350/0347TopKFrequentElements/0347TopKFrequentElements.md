# 347. Top K Frequent Elements

Given a non-empty array of integers, return the **k** most frequent elements.

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]
```

**Note:**

- You may assume *k* is always valid, 1 ≤ *k* ≤ number of unique elements.
- Your algorithm's time complexity **must be** better than O(*n* log *n*), where *n* is the array's size.
- It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
- You can return the answer in any order.



#### 2020.07.13

#### 	我的思路：

##### 方法1：

刚好O(nlogn)

```javascript
var topKFrequent = function(nums, k) {
    let map = new Map();
    nums.forEach(e => {
        map.set(e , (map.get(e) || 0) + 1);
    })

    let newArr = [];
    map.forEach((val, key) => {
        newArr.push({
            val: key,
            num: val
        })
    }) 

    newArr.sort((a, b) => {
        return b.num - a.num
    })

    const result = [];
    for (let i = 0; i < k; i++) {
        result[i] = newArr[i].val
    }

    return result;
};
```

##### 方法2：

利用快排来找到第k个位置时，前面的k个值就是前k大的元素了

```javascript
var topKFrequent = function(nums, k) {

    let map = new Map();
    nums.forEach(e => {
        map.set(e , (map.get(e) || 0) + 1);
    })

    let newArr = [];
    map.forEach((val, key) => {
        newArr.push({
            val: key,
            num: val
        })
    }) 

    if (newArr.length == 1) {
        return [newArr[0].val]
    }
    
    let lo = 0;
    let hi = newArr.length - 1;
    k--;

    while (true) {
        let mid = partition(newArr, lo, hi);
        if (mid < k) {
            lo = mid + 1;
        }
        else if (mid > k) {
            hi = mid - 1;
        }
        else {
            return newArr.slice(0, k + 1).map(e => e.val);
        }
    }
};

function partition(arr, lo, hi) {
    if (lo == hi) {
        return lo;
    }

    let i = lo;
    let j = hi + 1;
    while (true) {
        while (arr[++i].num > arr[lo].num && i !== hi) {};
        while (arr[--j].num < arr[lo].num && j !== lo) {};
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[lo], arr[j]] = [arr[j], arr[lo]];
    return j;
}
```

##### 方法3：

堆排序，太简单，省略

