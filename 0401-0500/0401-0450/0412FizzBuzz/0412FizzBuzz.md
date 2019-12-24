# 412. Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to *n*.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

##### 2019.12.24

#### 	我的思路：

```javascript
var fizzBuzz = function(n) {
    let result = new Array(n).fill('');
    for (let i = 0; i < n; i++) {
        if ((i + 1) % 3 == 0 || (i + 1) % 5 == 0) {
            if (!((i + 1) % 3)) {
                result[i] += 'Fizz';
            }
            if (!((i + 1) % 5)) {
                result[i] += 'Buzz';
            }
        }
        else {
            result[i] += i + 1;
        }
    }
    return result;
};
```

#### 别人的方法：

​	高亮答案里面说cpu取模运算效率很低。

```javascript
var fizzBuzz = function(n) {
    let result = new Array(n);
    for (let i = 0, fizz = 0, buzz = 0; i < n; i++) {
        fizz++;
        buzz++;
        if (fizz == 3 && buzz == 5) {
            fizz = 0;
            buzz = 0;
            result[i] = 'FizzBuzz';
        }
        else if (fizz == 3) {
            fizz = 0;
            result[i] = 'Fizz';
        }
        else if (buzz == '5') {
            buzz = 0;
            result[i] = 'Buzz';
        }
        else {
            result[i] = (i + 1).toString();
        }
    }
    return result;
}
```
