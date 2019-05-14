#### 问题描述

​	Given *n* non-negative integers *a1*, *a2*, ..., *an* , where each represents a point at coordinate (*i*, *ai*). *n* vertical lines are drawn such that the two endpoints of line *i* is at (*i*, *ai*) and (*i*, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

**Note:** You may not slant the container and *n* is at least 2.

 

![img](./question_11.jpg)

The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

**Example:**

```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

我的解决方法	

##### 2019.05.14

​	我的思路：暴力解法，时间复杂度O(n<sup>2</sup>)

```javascript
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = i +1; j <height.length; j++){
            let v = (j - i) * Math.min(height[i], height[j]);
            max = max > v ? max : v;
        }
    }
    return max;
};

```

​	别人的思路：两点法，从距离最远的两点开始，每次移动短的那跟轴，因为这样在减少了两点的距离后，得到的新矩形比原来更大的可能性更大。这样的时间复杂度为O(n)。

​	**注意** 第五行一开始我写的是start  <  end,这样让性能大打折扣（因为需要多循环一次）

```javascript
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length - 1;
    while(start <= end){
        let low = 0;
        let h = end - start;
        if(height[end] > height[start]){
            low = height[start++];
        }else{
            low = height[end--];
        }
        max = max > low * h ? max : low * h;
    }
    return max;
}
```

