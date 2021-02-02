"use strict";
function reverseWords(s) {
    return s.split(/\s+/g).map(function (e) { return e.split('').reverse().join(''); }).join(' ');
}
;
