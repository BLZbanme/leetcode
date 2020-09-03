# 841.Keys and Rooms

There are `N` rooms and you start in room `0`.  Each room has a distinct number in `0, 1, 2, ..., N-1`, and each room may have some keys to access the next room. 

Formally, each room `i` has a list of keys `rooms[i]`, and each key `rooms[i][j]` is an integer in `[0, 1, ..., N-1]` where `N = rooms.length`.  A key `rooms[i][j] = v` opens the room with number `v`.

Initially, all the rooms start locked (except for room `0`). 

You can walk back and forth between rooms freely.

Return `true` if and only if you can enter every room.



**Example 1:**

```
Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
```

**Example 2:**

```
Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.
```

**Note:**

1. `1 <= rooms.length <= 1000`
2. `0 <= rooms[i].length <= 1000`
3. The number of keys in all rooms combined is at most `3000`.



#### 2020.08.31

#### 	我的思路：

dfs

```javascript
function canVisitAllRooms11(rooms: number[][]): boolean {
    const set = new Set([0]);
    const N = rooms.length;
    const dfs = (index: number): void => {
        if (set.size == N) {
            return;
        }
        let now = rooms[index];
        if (!now.length) {
            return;
        }

        while (now.length) {
            let tmp = now.shift();
            set.add(tmp);
            dfs(tmp);
        }
    }
    dfs(0);
    return set.size === N;
};
```

#### 别人的思路：

##### 	dfs

发现加个visited数组好多了

```javascript
function canVisitAllRooms(rooms: number[][]): boolean {
    const N = rooms.length;
    const visited:Array<boolean> = (Array(N) as any).fill(false);

    let num = 0;
    const dfs = (index: number) :void => {
        visited[index] = true;
        num++;
        for (let i of rooms[index]) {
            if (!visited[i]) {
                dfs(i);
            }
        }
    }

    dfs(0);

    return num === N;
};
```

# 486. Predict the Winner

Given an array of scores that are non-negative integers. Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on. Each time a player picks a number, that number will not be available for the next player. This continues until all the scores have been chosen. The player with the maximum score wins.

Given an array of scores, predict whether player 1 is the winner. You can assume each player plays to maximize his score.

**Example 1:**

```
Input: [1, 5, 2]
Output: False
Explanation: Initially, player 1 can choose between 1 and 2. 
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
Hence, player 1 will never be the winner and you need to return False.
```

 

**Example 2:**

```
Input: [1, 5, 233, 7]
Output: True
Explanation: Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.
```

 

**Constraints:**

- 1 <= length of the array <= 20.
- Any scores in the given array are non-negative integers and will not exceed 10,000,000.
- If the scores of both players are equal, then player 1 is still the winner.

#### 2020.09.01

#### 我的思路：

没写出来

#### 别人的思路：

##### 递归

```javascript
function PredictTheWinner11(nums: number[]): boolean {
    return total(nums, 0, nums.length - 1, 1) >= 0;
};

function total(nums: Array<number>, start: number, end: number, turn: number): number {
    if (start === end) {
        return nums[start] * turn;
    }
    let scoreStart = nums[start] * turn + total(nums, start + 1, end, -turn);
    let scoreEnd = nums[end] * turn + total(nums, start, end - 1, -turn);
    return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
}
```

##### 动态规划

```typescript
function PredictTheWinner(nums: Array<number>): boolean {
    const N = nums.length;
    const dp = Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = Array(N);
        dp[i][i] = nums[i];
    }

    for (let i = N - 2; i >= 0; i--) {
        for (let j = i + 1; j < N; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][N - 1] >= 0;
}
```

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

