let username = document.querySelector('#username');
let password = document.querySelector('#password');
let form = document.querySelector('form');
let test = document.querySelector('#test');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);
    test.innerHTML = `<div><p>${username.value}</p><p>${password.value}</p></div> `
})