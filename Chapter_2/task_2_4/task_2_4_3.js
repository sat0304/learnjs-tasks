'use strict';

function someCode(currentDate) {
    let yearCurrentDate =  new Date().getFullYear();
    let yearPastTime = currentDate.split('.')[2];
    return yearCurrentDate - yearPastTime;
}

const BIRTHDAY = '18.04.1982';
const age = someCode(BIRTHDAY);


console.log(BIRTHDAY);
console.log(age);

// alert(BIRTHDAY);
// alert(age);
