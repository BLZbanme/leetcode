# 1217. Minimum Cost to Move Chips to The Same Position

We have `n` chips, where the position of the `ith` chip is `position[i]`.

We need to move all the chips to **the same position**. In one step, we can change the position of the `ith` chip from `position[i]` to:

- `position[i] + 2` or `position[i] - 2` with `cost = 0`.
- `position[i] + 1` or `position[i] - 1` with `cost = 1`.

Return *the minimum cost* needed to move all the chips to the same position.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg)

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg)

**Example 3:**

```
Input: position = [1,1000000000]
Output: 1
```

 

**Constraints:**

- `1 <= position.length <= 100`
- `1 <= position[i] <= 10^9`

#### 2021.02.01

##### 	我的思路：

```javascript
function minCostToMoveChips(position: number[]): number {
    let oneCount = 0, twoCount = 0;
    position.forEach(e => e & 1 ? oneCount++ : twoCount++);
    return Math.min(oneCount, twoCount);
};
```

