# 275. H-Index II

Given an array of citations **sorted in ascending order** (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the [definition of h-index on Wikipedia](https://en.wikipedia.org/wiki/H-index): "A scientist has index *h* if *h* of his/her *N* papers have **at least** *h* citations each, and the other *N − h* papers have **no more than** *h* citations each."

**Example:**

```
Input: citations = [0,1,3,5,6]
Output: 3 
Explanation: [0,1,3,5,6] means the researcher has 5 papers in total and each of them had 
             received 0, 1, 3, 5, 6 citations respectively. 
             Since the researcher has 3 papers with at least 3 citations each and the remaining 
             two with no more than 3 citations each, her h-index is 3.
```

**Note:**

If there are several possible values for *h*, the maximum one is taken as the h-index.

**Follow up:**

- This is a follow up problem to [H-Index](https://leetcode.com/problems/h-index/description/), where `citations` is now guaranteed to be sorted in ascending order.
- Could you solve it in logarithmic time complexity?

##### 2019.10.12

##### 	我的思路：

​		O(n)的方法，暴力遍历

```javascript
var hIndex = function(citations) {
    let i = 0;
    let j = citations.length - 1;
    while (j >= 0 && citations[j] >= i + 1) {
        j--;
        i++;
    }
    return i;
};
```

##### 别人的方法：

​	O(logN)，二分查找

```javascript
var hIndex = function(citations) {
    const N = citations.length;
    let lo = 0;
    let hi = N - 1;
    let mid;
    while (lo <= hi) {
        mid = Math.floor(lo + Math.floor((hi - lo) / 2));
        if (citations[mid] < N - mid) {
            lo = mid + 1;
        }
        else if (citations[mid] > N - mid) {
            hi = mid - 1;
        }
        else {
            return citations[mid];
        }
    }
    return N - hi - 1;
}
```

