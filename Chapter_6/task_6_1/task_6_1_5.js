'use strict';

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
showMenu(menu);



function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
      // alert(obj[key]);
    }
  }
}

function showMenu(obj) {
  for (let key in obj) {
    alert(`${key}: ${obj[key]}`);
  }
}
