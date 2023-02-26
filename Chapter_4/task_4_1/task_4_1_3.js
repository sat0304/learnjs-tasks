'use strict';

const user = {
  name: "John"
};

// Работает!
alert(user.name = "Pete");

// Ошибка
alert(user = 123);
