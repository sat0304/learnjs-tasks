'use strict';

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  

alert(readMap.set(messages[0], new Date(2017, 1, 1)));
alert( JSON.stringify(readMap.set(messages[0], new Date(2017, 1, 1)), null, 4) );
