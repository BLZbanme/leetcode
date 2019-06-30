# 40.Combination Sum II

Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

Each number in `candidates` may only be used **once** in the combination.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

##### 2019.06.23

##### 	我的思路：

​	跟39题一样，要注意的事移动下标去重，先排序，每个相同的数字只算第一碰到的结果，后面相同的全部跳过。

```javascript
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let i = 0;
    let l = candidates.length;
    while(i < l){
        let num = candidates[i];
        if(num == target){
            res.push([num]);
        }else if(num < target){
            find(candidates, target - num, i + 1, [num], res);
        }else{
            return res;
        }
        i++;
        while(i < l && candidates[i] == candidates[i - 1]){
            i++;
        }

    }
    return res;
};

function find(candidates, target, index, arr, res){
    let l = candidates.length;
    while(index < l){
        let num = candidates[index];
        if(num == target){
            res.push(cpArrAndPush(arr, num));
            return;
        }else if(num < target){
            find(candidates, target - num, index + 1, cpArrAndPush(arr, num), res);
        }else{
            return ;
        }
        index++;
        while(index < l && candidates[index] == candidates[index - 1]){
            index++;
        }
    }
}

function cpArrAndPush(arr, num){
    let newArr = [...arr];
    newArr.push(num);
    return newArr;
}
```
