# 



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

