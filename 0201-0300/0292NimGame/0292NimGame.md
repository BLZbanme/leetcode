You are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.

Both of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.

**Example:**

```
Input: 4
Output: false 
Explanation: If there are 4 stones in the heap, then you will never win the game;
             No matter 1, 2, or 3 stones you remove, the last stone will always be 
             removed by your friend.
```

##### 2019.06.11

##### 	我的思路：

​	思路错误：不知道以前是在哪个地方看到的这种思路。

```javascript
var win = true;

var canWinNim = function(n) {
    if(n <= 3){
        return win;
    }else{
        win = !win;
        return canWinNim(n - 1);
    }
};
```

​	正确解法：真是耻辱连这个没都写出来。。

```javascript
var canWinNim = function(n) {
    return n % 4 != 0;
};
```

​	**巴什博奕(Bash Game)** :[参考资料](https://blog.csdn.net/yyl424525/article/details/56840182)