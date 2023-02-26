'use strict';

function extractCurrencyValue(str) {
  alert(str.slice( 0, 1 ))
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') );
alert( extractCurrencyValue('P8345') );
