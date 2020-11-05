# 1356. Sort Integers by The Number of 1 Bits

Given an integer array `arr`. You have to sort the integers in the array in ascending order by the number of **1's** in their binary representation and in case of two or more integers have the same number of **1's** you have to sort them in ascending order.

Return *the sorted array*.

 

**Example 1:**

```
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
```

**Example 2:**

```
Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.
```

**Example 3:**

```
Input: arr = [10000,10000]
Output: [10000,10000]
```

**Example 4:**

```
Input: arr = [2,3,5,7,11,13,17,19]
Output: [2,3,5,17,7,11,13,19]
```

**Example 5:**

```
Input: arr = [10,100,1000,10000]
Output: [10,100,10000,1000]
```

 

**Constraints:**

- `1 <= arr.length <= 500`
- `0 <= arr[i] <= 10^4`



#### 2020.11.06

#### 	我的思路：

##### 方法1:记忆化优化

```javascript
function sortByBits(arr: number[]): number[] {
    const map = new Map();
    return arr.sort((a, b) => {
        let aCount = map.get(a);
        let bCount = map.get(b);
        if (!aCount) {
            aCount = a.toString(2).split("").filter(e => e == '1').length;
            map.set(a, aCount);
        }
        if (!bCount) {
            bCount = b.toString(2).split("").filter(e => e == '1').length;
            map.set(b, bCount);
        }
        if (aCount == bCount) {
            return a - b
        }
        return aCount - bCount;
    })
};
```

##### 方法2:求1的方法优化

```typescript
function sortByBits(arr: number[]): number[] {
    const map = new Map();
    return arr.sort((a, b) => {
        let aCount = map.get(a);
        let bCount = map.get(b);
        if (!aCount) {
            aCount = countOne(a);
            map.set(a, aCount);
        }
        if (!bCount) {
            bCount = countOne(b);
            map.set(b, bCount);
        }
        if (aCount == bCount) {
            return a - b
        }
        return aCount - bCount;
    })
};

function countOne(num: number) {
    let res = 0;
    while (num) {
        res += num & 1;
        num >>= 1;
    }
    return res;
}
```

##### 方法3:先算每个值的1的个数

```typescript
function sortByBits(arr: number[]): number[] {
    const map = Array(10001).fill(0);
    for (let i = 1; i <= 10000; i++) {
        map[i] = map[i >> 1] + (i & 1);
    }
    return arr.sort((a, b) => {
        if (map[a] == map[b]) {
            return a - b;
        }
        return map[a] - map[b];
    })
};
```

