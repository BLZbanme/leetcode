# 657.Robot Return to Origin

There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot **ends up at (0, 0)** after it completes its moves.

The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

**Note**: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

**Example 1:**

```
Input: "UD"
Output: true 
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
```

**Example 2:**

```
Input: "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
```

##### 2019.06.09

##### 	我的思路：

​	这题思路没啥讲的。。

​	时间复杂度O(n)。空间复杂度O(1)。

```javascript
var judgeCircle = function(moves) {
    let x = y = 0;
    for(let e of moves){
        switch(e){
            case "U":
                y += 1;
                break;
            case "D":
                y -= 1;
                break;
            case "L":
                x += 1;
                break;
            case "R":
                x -= 1;
                break;
            default:
                break;
        }
    }
    return x === 0 && y === 0;
};
```

#### 2020.08.28

#### redo

```typescript
function judgeCircle(moves: string): boolean {
    let i = 0;
    let j = 0;
    for (let k = 0; k < moves.length; k++) {
        switch(moves[k]) {
            case 'L':
                i++;
                break;
            case 'R':
                i--;
                break;
            case 'U':
                j--;
                break;
            case 'D':
                j++;
                break;
            default:
                break;
        }
    }
    return i === 0 && j === 0;
};
```

