'use strict';

// let name = "John";

// function sayHi() {
//   console.log("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // что будет показано: "John" или "Pete"?

// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     console.log(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work(); //

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1
