'use strict';

let age;
// age = +prompt('Input Your Age', '');
// if (!(age >= 14 && age <= 90)){
//     alert('Not allowed');
// }
// else{
//     alert('Allowed');
// };

age = +prompt('Input Your Age', '');
if (age < 14 || age > 90){
    alert('Not allowed');
}
else{
    alert('Allowed');
};
