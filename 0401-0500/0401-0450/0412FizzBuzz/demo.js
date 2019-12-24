/**
 * @param {number} n
 * @return {string[]}
 */
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

var fizzBuzz = function(n) {
    let result = new Array(n).fill('');
    for (let i = 2; i < n; i += 3) {
        result[i] += 'Fizz';
    }
    for (let i = 4; i < n; i += 5) {
        result[i] += 'Buzz';
    }
    for (let i = 0; i < n; i++) {
        result[i] += result[i] ? "" : i + 1;
    }
    return result;
};

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

console.log(fizzBuzz(15));