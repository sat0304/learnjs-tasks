'use strict';

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили???');
//   }

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили??');
  }

  let age = +prompt('Сколько вам лет?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Доступ получен' );
  } else {
    alert( 'Доступ закрыт' );
  }
