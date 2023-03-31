'use strict';

// async function showAvatar() {

//   // запрашиваем JSON с данными пользователя
//   let response = await fetch('/article/promise-chaining/user.json');
//   let user = await response.json();

//   // запрашиваем информацию об этом пользователе из github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // отображаем аватар пользователя
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();


async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  throw new Error(response.status);
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)
