'use strict';

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = value => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter.set(152) ); // 0
alert( counter.decrease() ); // 1
alert( counter.decrease() ); // 1
alert( counter.decrease() ); // 1
alert( counter.decrease() ); // 1

alert( counter2.set(3) ); // 0
alert( counter2.decrease() ); // 1
alert( counter2.decrease() ); // 1
alert( counter2.decrease() ); // 1
alert( counter2.decrease() ); // 1
alert( counter2.decrease() ); // 1
alert( counter2.decrease() ); // 1
