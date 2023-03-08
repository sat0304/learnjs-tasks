'use strict';

function sumToCycle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert( sumToCycle(100) );

function sumToRecurcion(n) {
  if (n == 1) return 1;
  return n + sumToRecurcion(n - 1);
}

alert( sumToRecurcion(100) );

function sumToFormula(n) {
  return n * (n + 1) / 2;
}

alert( sumToFormula(100) );
