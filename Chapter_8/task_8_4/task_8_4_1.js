'use strict';

let dictionary = Object.create(null, {
    toString: { // определяем свойство toString
      value() { // значение -- это функция
        return Object.keys(this).join();
      }
    }
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";

  for(let key in dictionary) {
    alert(key); // "apple", затем "__proto__"
  }
  
  // список свойств, разделённых запятой, выведен с помощью toString
  alert(dictionary); // "apple,__proto__"
