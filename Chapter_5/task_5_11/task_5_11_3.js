'use strict';

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getLocalDay(date) );