# 593. Valid Square

Given the coordinates of four points in 2D space, return whether the four points could construct a square.

The coordinate (x,y) of a point is represented by an integer array with two integers.

**Example:**

```
Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: True
```

 

Note:

1. All the input integers are in the range [-10000, 10000].
2. A valid square has four equal sides with positive length and four equal angles (90-degree angles).
3. Input points have no order.



#### 2020.09.25

#### 	我的思路：

没写出来

#### 别人的写法：

##### 注：重点是判断正方形四条边同样长，以及对角线同样长

```javascript
function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    const queue = [p1, p2, p3, p4];
    queue.sort((a, b) => {
        if (a[0] != b[0]) {
            return a[0] - b[0];
        }
        else {
            return a[1] - b[1];
        }
    })

    return dist(queue[0], queue[1]) != 0 && dist(queue[0], queue[1]) == dist(queue[1], queue[3]) && dist(queue[3], queue[2]) == dist(queue[1], queue[3])
    && dist(queue[3], queue[2]) == dist(queue[2], queue[0]) && dist(queue[0], queue[3]) == dist(queue[1], queue[2]);
};

function dist(p1: Array<number>, p2: Array<number>): number {
    return (p2[1] - p1[1]) ** 2 + (p2[0] - p1[0]) ** 2;
}
```

##### 
