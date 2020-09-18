#  47. Permutations II

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

**Example:**

```
Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```

##### 2019.06.27

##### 	我的思路：

​	dfs,有两点要注意的：

​	1.去重，每种相同的值只有遍历到第一个的时候计算可能值，后面的值都会和第一个重复。

​	2.判断是否使用了某个值，在这里我疯狂的浅复制数组，并删掉使用过的那个值（重复值也只删当前用的那一个），估计内存开销会很大。

​	 好久没写跟标准答案几乎一样的解了~，最高的答案最后一步声明个list，然后把map的values放到list里面，但是由于我是每次都直接把对应的数组对象放在结果list里面了，所以直接返回list就行

```javascript
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let i = 0;
    while(i < nums.length){
        if(nums.length == 1){
            return [nums];
        }
        let tmpArr = [...nums];
        tmpArr.splice(i, 1);
        permute([nums[i]], tmpArr, res);
        i++;
        while(i < nums.length && nums[i] == nums[i - 1]){
            i++;
        }
    }
    return res;
};

function permute(arr, nums, res){
    let i = 0;
    while(i < nums.length){
        let tmpArr = [...nums];
        tmpArr.splice(i, 1);
        let arrNew = [...arr];
        arrNew.push(nums[i]);
        if(nums.length == 1){
            res.push(arrNew);
            return;
        }
        permute(arrNew, tmpArr, res);
        i++;
        while(i < nums.length && nums[i] == nums[i - 1]){
            i++;
        }
    }
}
```

##### 别人的思路：

##### 	方法1：

​	同样是dfs，这位选手的思路是用一个used数组标记使用了的值。

##### 	还有值得借鉴的地方是：

​	我自己写的代码中，主函数里面不应该写第一次迭代的（这样代码和上面permute中重复了很多），应该把全部迭代的运算都在dfs方法里面。

```javascript
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let used = new Array(nums.length).fill(false);
    let list = [];
    dfs(nums, used, list, res);
    return res;
};

function dfs(nums, used, list, res){
    if(list.length == nums.length){
        res.push([...list]);
        return;
    }

    for(let i = 0; i < nums.length; i++){
        if(used[i]){
            continue;
        }
        if(i > 0 && nums[i - 1] == nums[i] && !used[i - 1]){
            continue;
        }
        used[i] = true;
        list.push(nums[i]);
        dfs(nums, used, list, res);
        used[i] = false;
        list.pop();
    }
}
```

#### 2020.09.18

#### redo

```typescript
function permuteUnique(nums: number[]): number[][] {
    const result: Array<Array<number>> = [];
    const set = new Set<number>();
    const N = nums.length;
    const arr: Array<number> = [];

    nums.sort((a, b) => a - b);

    const dfs = (index: number) => {
        if (arr.length == N) {
            result.push(Array.from(arr));
            return;
        }
        for (let i = 0; i < N; i++) {
            if ((i !== index && nums[i] == nums[i - 1] && !set.has(i - 1)) || set.has(i)) {
                continue;
            }
            set.add(i);
            arr.push(nums[i]);
            dfs(i + 1);
            arr.pop();
            set.delete(i);
        }
    }
    dfs(0);
    return result;
};
```

