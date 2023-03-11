'use strict';

function f(x) {
  alert(x);
}


function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f5000 = delay(f, 5000);
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test 1000"); 
f1500("test 1500"); 
f5000("test 5000"); 
