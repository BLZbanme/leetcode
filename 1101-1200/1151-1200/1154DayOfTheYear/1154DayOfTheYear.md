# 1154. Day of the Year

Given a string `date` representing a [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) date formatted as `YYYY-MM-DD`, return the day number of the year.

 

**Example 1:**

```
Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
```

**Example 2:**

```
Input: date = "2019-02-10"
Output: 41
```

**Example 3:**

```
Input: date = "2003-03-01"
Output: 60
```

**Example 4:**

```
Input: date = "2004-03-01"
Output: 61
```

 

**Constraints:**

- `date.length == 10`
- `date[4] == date[7] == '-'`, and all other `date[i]`'s are digits
- `date` represents a calendar date between Jan 1st, 1900 and Dec 31, 2019.



#### 2020.10.27

#### 	我的思路：

```javascript
function dayOfYear(date: string): number {
    let arr = date.split("-").map(e => +e);
    let daysNum = 0;
    const pinMonths = new Set([1, 3, 5, 7, 8, 10]);
    const map = new Map();
    for (let i = 1; i <= arr[1]; i++) {
        map.set(i, daysNum)
        if (pinMonths.has(i)) {
            daysNum += 31;
        }
        else if (i !== 2) {
            daysNum += 30;
        }
        else {
            daysNum += 28;
        }
    }
    let days = map.get(arr[1]) + arr[2];
    if (arr[0] % 4 !== 0 || (arr[0] % 100 == 0 && arr[0] % 400 !== 0) || arr[1] < 3) {
        return days;
    }

    return days + 1;
};
```

