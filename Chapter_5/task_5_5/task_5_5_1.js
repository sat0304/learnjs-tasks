'use strict';

function camelize(str) {
    return str
      .split('-')
      .map(
   
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join('');
  }

  alert("background-color");
  alert(camelize("background-color"));
  alert("list-style-image");
  alert(camelize("list-style-image"));
  alert("-webkit-transition");
  alert(camelize("-webkit-transition"));
