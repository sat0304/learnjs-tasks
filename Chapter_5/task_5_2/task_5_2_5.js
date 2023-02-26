'use strict';

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(5, 45) );
alert( random(3, 57) );
