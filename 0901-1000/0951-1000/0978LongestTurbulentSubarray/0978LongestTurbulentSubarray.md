# 978. Longest Turbulent Subarray

Given an integer array `arr`, return *the length of a maximum size turbulent subarray of* `arr`.

A subarray is **turbulent** if the comparison sign flips between each adjacent pair of elements in the subarray.

More formally, a subarray `[arr[i], arr[i + 1], ..., arr[j]]` of `arr` is said to be turbulent if and only if:

- For

   

  ```
  i <= k < j
  ```

  :

  - `arr[k] > arr[k + 1]` when `k` is odd, and
  - `arr[k] < arr[k + 1]` when `k` is even.

- Or, for

   

  ```
  i <= k < j
  ```

  :

  - `arr[k] > arr[k + 1]` when `k` is even, and
  - `arr[k] < arr[k + 1]` when `k` is odd.

 

**Example 1:**

```
Input: arr = [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
```

**Example 2:**

```
Input: arr = [4,8,12,16]
Output: 2
```

**Example 3:**

```
Input: arr = [100]
Output: 1
```

 

**Constraints:**

- `1 <= arr.length <= 4 * 104`
- `0 <= arr[i] <= 109`

#### 2021.01.22

#### 	我的思路：

dp

```javascript
function maxTurbulenceSize1(arr: number[]): number {
    const n = arr.length;
    const add = Array(n).fill(1);
    const diff = Array(n).fill(1);
    let max = 1;
    for (let i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) {
            diff[i] = 1;
            add[i] = diff[i - 1] + 1
        }
        else if (arr[i] < arr[i - 1]) {
            diff[i] = add[i - 1] + 1;
            add[i] = 1
        }
        max = Math.max(max, add[i], diff[i]);
    }
    return max;
};
```

#### 别人的思路：

滑动窗口

```typescript
function maxTurbulenceSize(arr: number[]): number {
    const n = arr.length;
    const compare = (a: number, b: number): number => {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        return 0;
    }
    let max = 1;
    
    let left = 0;
    for (let right = 1; right < n; right++) {
        let c = compare(arr[right - 1], arr[right]);
        if (right === n - 1 || c * compare(arr[right], arr[right + 1]) != -1) {
            if (c !== 0) {
                max = Math.max(right - left + 1);
            }
            left = right;
        }
    }
    return max;
};
```

#### 2021.02.08

##### redo

```typescript
function maxTurbulenceSize(arr: number[]): number {
    const n = arr.length;
    let left = 0;
    const compare = (a: number, b: number): number => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
    let max = 1;
    let cp = compare(arr[0], arr[1]);
    if (cp !== 0) {
        max = 2;
    }
    for (let right = 2; right < n; right++) {
        if (cp * compare(arr[right - 1], arr[right]) != -1) {
            left = right - 1;
        }
        else {
            max = Math.max(right - left + 1, max);
        }
        cp = compare(arr[right - 1], arr[right]);
    }
    return max;
};
```

