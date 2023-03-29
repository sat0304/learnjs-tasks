'use strict';

function Rabbit(name) {
  this.name = name;
};

Rabbit.prototype = {};

let rabbit = new Rabbit('Crazy hare');
let rabbit2 = new rabbit.constructor('Bugs Bunny');

alert( rabbit.name );
alert( rabbit2.name ); // undefined



function User(name) {
  this.name = name;
};

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user.name );
alert( user2.name );
