'use strict';

let user = {
  name: "Василий Иванович",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
alert( JSON.stringify(user2, null, 4) );