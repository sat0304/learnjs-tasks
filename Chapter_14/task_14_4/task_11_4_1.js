'use strict';

// fetch('./user.json')
// // fetch('https://api.github.com/users/sat0304')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser);
//     }, 30000);
//   }))
//   .catch(error => alert(error.message));

  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);