'use strict';

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert('Привет!') :
//   () => alert("Здравствуйте!");

// alert(welcome);
// welcome()

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
    };
    
ask(
    "Вы согласны?",
    () => alert("Вы согласились!"),
    () => alert("Вы отменили выполнение!")
    );
