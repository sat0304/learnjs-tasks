'use strict';

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert('First function Timeout:  ' + current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // использование:
  printNumbers(7, 15);


function printNumbers2(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert('Other function Timeout:  ' + current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    //   go();
    }, 1000);
  }
  
  // использование:
  printNumbers2(1, 6);
