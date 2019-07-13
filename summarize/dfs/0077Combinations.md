# 77. Combinations

Given two integers *n* and *k*, return all possible combinations of *k* numbers out of 1 ... *n*.

**Example:**

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

##### 2019.07.13

##### 	我的思路：

###### 	写法1：

​		dfs的老生常谈了

```javascript
var combine = function(n, k) {
    let res = [];
    dfs(1, [], n, k, res);
    return res;
};

function dfs(index, arr, n, k, res) {
    if (k == 0) {
        res.push(arr);
        return;
    }
    for (let i = index; i <= n; i++) {
        let tmp = [...arr];
        tmp.push(i);
        dfs(i + 1, tmp, n, k - 1, res);
    }
}
```

##### 别人的写法：

###### 		写法2：

​		同样是dfs，但是别人的这个写法比我好不少（这样的写法我碰到很多次，下次一定这样写！）

````javascript
var combine = function(n, k) {
    let res = [];
    dfs(1, [], n, k, res);
    return res;
};

function dfs(index, arr, n, k, res) {
    if (k == 0) {
        res.push([...arr]);
        return;
    }
    for (let i = index; i <= n; i++) {
        arr.push(i);
        dfs(i + 1, arr, n, k - 1, res);
        arr.pop();
    }
}
````

