# 39.Combination Sum

Given a **set** of candidate numbers (`candidates`) **(without duplicates)** and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sums to `target`.

The **same** repeated number may be chosen from `candidates` unlimited number of times.

**Note:**

- All numbers (including `target`) will be positive integers.
- The solution set must not contain duplicate combinations.

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
```

##### 2019.06.22

##### 	我的思路：

##### 	方法1：

​	 回溯，把target一次次分解下，如果出现target < num，说明得不到合适的组合，就返回。值得注意的是为了防止算重复，把candidates排序了，并且在每次迭代从传了遍历起始的下标

​	时间复杂度O(n！)，因为存在n！种结果，每一种都算了。

```javascript
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.unshift(num);
                res.push(arr);
            }
        }else{
            continue;
        }
    }
    return res;
};

function find(candidates, target, index = 0){
    let res = [];
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            let list = find(candidates, target - num, i);
            if(!list){
                continue;
            }
            for(let arr of list){
                arr.unshift(num);
                res.push(arr);
            }
        }else{
            continue;
        }
    }
    return res;
}
```

​	另外一种写法，把unshift换成了push，因为unshift的开销大一些，换成push直接在结果的中的每个集合顺序逆序了下。

##### 	方法2：

​	方法1是分解到最后结果之后，把结果一层层返回，在最外层合成最后的数组。方法2每次都循环都把当前数组和结果list传进去。直接迭代到最后，分解到不再可以划分后，把当前结果push进入口的数组，然后把这个数组假如结果list。值得注意的是，需要复制数组，不可直接操作入口数组！

```javascript
var combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    for(let i = 0; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            res.push([num])
            return res;
        }else if(num < target){
            find(res, [num] ,candidates, target - num, i);
        }else{
            return res;
        }
    }
    return res;
};

function find(result, arr, candidates, target, index = 0){
    for(let i = index; i < candidates.length; i++){
        let num = candidates[i];
        if(num == target){
            let newArr = [...arr];
            newArr.push(num);
            result.push(newArr);
        }else if(num < target){
            let newArr = [...arr];
            newArr.push(num);
            find(result, newArr, candidates, target - num, i);
        }else{
            return;
        }
    }
}
```

##### 题外话：

​	本来不想定义另一个方法，直接在combinationSum中迭代的，给参数赋默认值，使得第一次迭代不缺参数。但是由于此题的candidates并不是排好序的，如果每次迭代重新排序开销太大，所以声明了一个find函数。