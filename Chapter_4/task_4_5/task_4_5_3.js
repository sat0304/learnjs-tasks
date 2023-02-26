'use strict';

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(10000);
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);
