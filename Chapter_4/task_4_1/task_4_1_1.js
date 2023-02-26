'use strict';

let user = {
  name: "John",
  surname: "Smith",
  age: 18,
};

for (let prop in user) {
    alert(user[prop]);
  };

user.name = "Pete";
delete user.name;
delete user.age;