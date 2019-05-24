​	Given an array *nums* and a value *val*, remove all instances of that value [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm) and return the new length.

​	Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

​	The order of elements can be changed. It doesn't matter what you leave beyond the new length.

**Example 1:**

```
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length.
```

**Example 2:**

```
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.

Note that the order of those five elements can be arbitrary.

It doesn't matter what values are set beyond the returned length.
```

**Clarification:**

​	Confused why the returned value is an integer but your answer is an array?

​	Note that the input array is passed in by **reference**, which means modification to the input array will be known to the caller as well.

​	Internally you can think of this:

```
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

##### 2019.05.24

##### 	我的思路：

​	 方法1：

​	从头遍历链表，碰到了几次val值得元素，就把后面的元素往前面移动几个。时间复杂度O(n)

```javascript
var removeElement = function(nums, val) {
    let l = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            l++;
        }else{
            nums[i - l] = nums[i];
        }
    }
    return nums.length - l;
};
```

​	方法2：

​	设置一个游标，把不等于的val的元素，放到游标对应的数组位置

```javascript
var removeElement = function(nums, val) {
    let l = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[l++] = nums[i];
        }

    }
    return l
};
```

##### 别人的写法

​	每次碰到值为val的元素直接把数组后面的元素换过来。这样会打乱顺序，但是题目并没有要求顺序

```javascript
var removeElement = function(nums, val) {
    let i = 0 ;
    let n = nums.length;
    while(i < n){
        if(nums[i] == val){
            nums[i] = nums[--n];
        }else{
            i++;
        }
    }
    return n;
}
```

