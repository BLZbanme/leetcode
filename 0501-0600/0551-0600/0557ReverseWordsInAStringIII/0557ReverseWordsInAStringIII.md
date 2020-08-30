# 557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

```
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
```

**Note:** In the string, each word is separated by single space and there will not be any extra space in the string.

##### 2019.06.17

##### 	我的思路：

​	不解释了，最近练js中数组的一些方法已经滚瓜烂熟了

​	时间复杂度O(n)

```javascript
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).filter((v, index) => index % 2 == 0).reduce((a, b) => a + b);
};
```

##### 别人的写法：

​	和我大同小异

#### 2020.08.30

#### redo

```typescript
function reverseWords(s: string): string {
    return s.split(/\s+/g).map(e => e.split('').reverse().join('')).join(' ');
};
```

