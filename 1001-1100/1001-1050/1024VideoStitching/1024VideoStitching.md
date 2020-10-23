# 1024. Video Stitching

You are given a series of video clips from a sporting event that lasted `T` seconds. These video clips can be overlapping with each other and have varied lengths.

Each video clip `clips[i]` is an interval: it starts at time `clips[i][0]` and ends at time `clips[i][1]`. We can cut these clips into segments freely: for example, a clip `[0, 7]` can be cut into segments `[0, 1] + [1, 3] + [3, 7]`.

Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event (`[0, T]`). If the task is impossible, return `-1`.

 

**Example 1:**

```
Input: clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], T = 10
Output: 3
Explanation: 
We take the clips [0,2], [8,10], [1,9]; a total of 3 clips.
Then, we can reconstruct the sporting event as follows:
We cut [1,9] into segments [1,2] + [2,8] + [8,9].
Now we have segments [0,2] + [2,8] + [8,10] which cover the sporting event [0, 10].
```

**Example 2:**

```
Input: clips = [[0,1],[1,2]], T = 5
Output: -1
Explanation: 
We can't cover [0,5] with only [0,1] and [1,2].
```

**Example 3:**

```
Input: clips = [[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], T = 9
Output: 3
Explanation: 
We can take clips [0,4], [4,7], and [6,9].
```

**Example 4:**

```
Input: clips = [[0,4],[2,8]], T = 5
Output: 2
Explanation: 
Notice you can have extra video after the event ends.
```

 

**Constraints:**

- `1 <= clips.length <= 100`
- `0 <= clips[i][0] <= clips[i][1] <= 100`
- `0 <= T <= 100`



#### 2020.10.24

#### 	我的思路：

复杂的dp

```javascript
function videoStitching(clips: number[][], T: number): number {
    let maxEnd = 0;
    clips.forEach(e => maxEnd = Math.max(maxEnd, e[1]));

    if (maxEnd < T) {
        return -1;
    }

    const dp = Array(maxEnd + 1).fill(0).map(e => Array(maxEnd + 1).fill(Infinity));
    clips.forEach(e => {
        let [start, end] = e;
        end = Math.min(end, T);
        for (let i = start; i <= end; i++) {
            for (let j = i; j <= end; j++) {
                dp[i][j] = 1;
            }
        }
    })

    for (let i = 0; i <= T; i++) {
        if (dp[0][i] == 1) continue;
        for (let j = i - 1; j >= 0; j--) {
            if (dp[0][j] == Infinity || dp[j][i] == Infinity) {
                continue;
            }
            dp[0][i] = Math.min(dp[0][i], dp[0][j] + dp[j][i])
        }
        if (dp[0][i] == Infinity) {
            return -1;
        }
    }
    return dp[0][T];
};
```

#### 别人的思路：

##### 方法1:牛逼的dp

```javascript
function videoStitching(clips: number[][], T: number): number {
    const dp = Array(T + 1).fill(Infinity)
    dp[0] = 0;
    for (let i = 1; i <= T; i++) {
        for (let clip of clips) {
            if (clip[0] < i && i <= clip[1]) {
                dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
            }
        }
    }
    return dp[T] == Infinity ? -1 : dp[T];
}
```

##### 方法2:贪心

```typescript
function videoStitching(clips: number[][], T: number): number {
    const maxNow = Array(T + 1).fill(0);
    for (let clip of clips) {
        if (clip[0] <= T) {
            maxNow[clip[0]] = Math.max(maxNow[clip[0]], clip[1]);
        }
    }
    let count = 0;
    let last = 0;
    let pre = 0;
    for (let i = 0; i <= T; i++) {
        last = Math.max(last, maxNow[i]);
        if (i == last) {
            return -1;
        }
        if (last >= T) {
            return count + 1;
        }

        if (i == pre) {
            count++;
            pre = last;
        }
        
    }
    return -1;
}
```

