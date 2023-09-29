// Dom Targeting Method
let menu = document.getElementById('menu');
let list = document.createElement('li');
list.innerText = 'Contact';
menu.appendChild(list);

let inputbox = document.getElementById('inputbox');
function setAttributes(params) {
    inputbox.setAttribute('disabled', '');
}

let title = document.getElementById('title');
title.classList.replace('hello' , 'demo');
console.log(title);









