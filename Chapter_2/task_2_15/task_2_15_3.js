'use strict';

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

let a, b, result;
a = +prompt('Input first number', 0);
b = +prompt('Input second number', 0);
result = min(a, b)
alert(`Minimum of ${a} and ${b} is ${result}`);
