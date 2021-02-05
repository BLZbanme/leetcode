# 1423. Maximum Points You Can Obtain from Cards

There are several cards **arranged in a row**, and each card has an associated number of points The points are given in the integer array `cardPoints`.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly `k` cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array `cardPoints` and the integer `k`, return the *maximum score* you can obtain.

 

**Example 1:**

```
Input: cardPoints = [1,2,3,4,5,6,1], k = 3
Output: 12
Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.
```

**Example 2:**

```
Input: cardPoints = [2,2,2], k = 2
Output: 4
Explanation: Regardless of which two cards you take, your score will always be 4.
```

**Example 3:**

```
Input: cardPoints = [9,7,7,9,7,7,9], k = 7
Output: 55
Explanation: You have to take all the cards. Your score is the sum of points of all cards.
```

**Example 4:**

```
Input: cardPoints = [1,1000,1], k = 1
Output: 1
Explanation: You cannot take the card in the middle. Your best score is 1. 
```

**Example 5:**

```
Input: cardPoints = [1,79,80,1,1,1,200,1], k = 3
Output: 202
```

 

**Constraints:**

- `1 <= cardPoints.length <= 10^5`
- `1 <= cardPoints[i] <= 10^4`
- `1 <= k <= cardPoints.length`

#### 2021.02.04

#### 	我的思路：

这题的实质:数组长为n，求长度为n-k的连续子数组的最小和

```typescript
function maxScore(cardPoints: number[], k: number): number {
    let sum = cardPoints.reduce((cur, pre) => cur + pre);
    const n = cardPoints.length;
    let nDiffKSum = 0;
    for (let i = 0; i < n - k; i++) {
        nDiffKSum += cardPoints[i];
    }
    let min = nDiffKSum;
    for (let i = n - k; i < n; i++) {
        nDiffKSum = nDiffKSum - cardPoints[i - n + k] + cardPoints[i];
        min = Math.min(min, nDiffKSum);
    }
    return sum - min;
};
```

#### 2021.02.06

##### redo

```typescript
function maxScore(cardPoints: number[], k: number): number {
    const sum = cardPoints.reduce((cur, pre) => cur + pre);
    const n = cardPoints.length;
    const diff = n - k;
    let min = sum;
    let cur = 0;
    for (let i = 0; i < n; i++) {
        if (i < diff) {
            cur += cardPoints[i];
            if (i === diff - 1) {
                min = cur;
            }
        }
        else {
            cur = cur - cardPoints[i - diff] + cardPoints[i];
            min = Math.min(min, cur);
        }
    }
    return sum - min
};
```

