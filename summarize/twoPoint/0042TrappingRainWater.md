# 42. Trapping Rain Water

Given *n* non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

![img](https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png)
The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. **Thanks Marcos** for contributing this image!

**Example:**

```
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

#### 2020.09.03

#### 我的思路：

没写出来

#### 别人的思路：

##### 方法1：暴力

```javascript
function trap(height: number[]): number {
    let res = 0;
    const N = height.length;
    for (let i = 1; i < N - 1; i++) {
        let maxLeft = 0;
        let maxRight = 0;
        for (let j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j]);
        }

        for (let j = i; j < N; j++) {
            maxRight = Math.max(maxRight, height[j]);
        }
        res += Math.min(maxLeft, maxRight) - height[i];
    }
    return res;
};
```

##### 方法2：两次遍历

```javascript
function trap(height) {
    if (!height) {
        return 0;
    }

    let res = 0;
    const N = height.length;
    const leftMax = Array(N);
    const rightMax = Array(N);
    leftMax[0] = height[0];
    for (let i = 1; i < N; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    rightMax[N - 1] = height[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    for (let i = 1; i < N - 1; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return res;
}
```

##### 方法3：双指针

```javascript
function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : res += (leftMax - height[left]);
            left++;
        }
        else {
            height[right] >= rightMax ? (rightMax = height[right]) : res += (rightMax - height[right]);
            right--;
        }
    }
    return res;
}
```

