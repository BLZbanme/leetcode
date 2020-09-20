# 1010. Pairs of Songs With Total Durations Divisible by 60

In a list of songs, the `i`-th song has a duration of `time[i]` seconds. 

Return the number of pairs of songs for which their total duration in seconds is divisible by `60`.  Formally, we want the number of indices `i`, `j` such that `i < j` with `(time[i] + time[j]) % 60 == 0`.

 

**Example 1:**

```
Input: [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60
```

**Example 2:**

```
Input: [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.
```

 

**Note:**

- `1 <= time.length <= 60000`
- `1 <= time[i] <= 500`

#### 2020.09.20

##### 	我的思路：

```javascript
function numPairsDivisibleBy60(time: number[]): number {
    const map = Array(60).fill(0);
    time.forEach(e => map[e % 60]++);
    let count = Cm2(map[0]) + Cm2(map[30]);
    for (let i = 1; i < 30; i++) {
        count += map[i] * map[60 - i];
    }
    return count;
};

function Cm2(m: number): number {
    return (m * (m - 1)) >> 1;
}
```
