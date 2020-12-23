# 135. Candy

There are *N* children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

- Each child must have at least one candy.
- Children with a higher rating get more candies than their neighbors.

What is the minimum candies you must give?

**Example 1:**

```
Input: [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
```

**Example 2:**

```
Input: [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
             The third child gets 1 candy because it satisfies the above two conditions.
```

#### 2020.12.24

#### 我的方法：

没写出来

#### 别人的方法：

先从左往右遍历，再从右往左遍历

```javascript
function candy(ratings: number[]): number {
    if (ratings.length === 1) return 1 
    const N = ratings.length;
    const left = Array(N).fill(0);
    const right = Array(N).fill(0);
    left[0] = 1
    for (let i = 1; i < N; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
        else {
            left[i] = 1;
        }
    }
    right[N - 1] = 1;
    for (let i = N - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
        else {
            right[i] = 1;
        }
    }
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += Math.max(left[i], right[i]);
    }
    return sum;
};
```

