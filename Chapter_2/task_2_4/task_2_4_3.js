'use strict';

function someCode(current_Date) {
    let date =  new Date().getFullYear();
    let yearPastTime = current_Date.split('.')[2];
    return date - yearPastTime;
}

const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);


// console.log(BIRTHDAY);
// console.log(age);

alert(BIRTHDAY);
alert(age);
