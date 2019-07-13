# 75. Sort Colors

Given an array with *n* objects colored red, white or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note:** You are not suppose to use the library's sort function for this problem.

**Example:**

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Follow up:**

- A rather straight forward solution is a two-pass algorithm using counting sort.
  First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
- Could you come up with a one-pass algorithm using only constant space?

##### 2019.07.13

##### 	我的思路：

###### 	方法1：

​		遍历一次结束

​		两点法：i表示下一个0元素放的地方，j表示下一个2元素放的地方

```javascript
var sortColors = function(nums) {
    let i = 0, j = nums.length - 1;
    let index = 0;
    while (index <= j) {
        if (nums[index] == 0 && index != i) {
            [nums[index], nums[i++]] = [nums[i], nums[index]];
        }
        else if (nums[index] == 2) {
            [nums[index], nums[j--]] = [nums[j], nums[index]];
        }
        else {
            index++;
        }
    }
    return;
};
```

###### 		方法2：

​		需要遍历两次。

​		遍历第一次先记录0、1、2分别的个数，然后再遍历一次按顺序写上去

###### 		注:本来第一反应是用方法2的，觉得太low了用的两点法

````javascript
var sortColors = function(nums) {
    let tmpArr = new Array(3).fill(0)
    nums.forEach(e => tmpArr[e]++);
    let i = 0;
    tmpArr.forEach((e, index) => {
        for (let j = 0; j < e; j++) {
            nums[i++] = index;
        }
    })
    return;
}
````

