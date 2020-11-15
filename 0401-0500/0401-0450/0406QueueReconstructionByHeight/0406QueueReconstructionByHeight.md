# 406. Queue Reconstruction by Height

Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers `(h, k)`, where `h` is the height of the person and `k` is the number of people in front of this person who have a height greater than or equal to `h`. Write an algorithm to reconstruct the queue.

**Note:**
The number of people is less than 1,100.

**Example**

```
Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
```

#### 2020.11.16

#### 	我的思路：

```javascript
function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        return a[0] - b[0] || b[1] - a[1];
    })

    const N = people.length;
    const ans: Array<Array<number>> = Array(N).fill(0).map(e => []);

    for (let person of people) {
        let spaces = person[1] + 1;
        for (let i = 0; i < N; i++) {
            if (!ans[i].length) {
                --spaces;
                if (spaces == 0) {
                    ans[i] = person;
                    break;
                }
            }
        }
    }

    return ans;
};
```
