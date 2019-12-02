The [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) between two integers is the number of positions at which the corresponding bits are different.

Given two integers `x` and `y`, calculate the Hamming distance.

**Note:**
0 ≤ `x`, `y` < 2<sup>31</sup>.

**Example:**

```
Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
```

##### 2019.06.10

##### 	我的思路：

​	将x与y异或处理，然后计算异或之后的二进制串有多少个位是'1'。

​	时间复杂度O(n)

```javascript
var hammingDistance = function(x, y) {
    let tmp = (x ^ y).toString(2);
    let res = 0;
    for(let i = 0;i < tmp.length; i++){
        if(tmp[i] == '1'){
            res++;
        }
    }
    return res;
};
```

##### 别人的写法：

​	心得：需要学习下数组的一些简便写法了！

```javascript
const hammingDistance = (x, y) => (x ^ y).toString(2).split("").filter(a => a === '1').length;
```

