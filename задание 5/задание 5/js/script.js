' use strict ';

let menuItem = document.querySelectorAll('.menu-item'),
    ull = document.querySelector('.menu'),
    li  = document.createElement('li'),
    title = document.getElementById('title'),
    promptt = document.getElementById('prompt');

menuItem[1].textContent = 'Второй пункт';
menuItem[2].textContent = 'Третий пункт';

ull.appendChild(li);
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

document.body.style.background = "url('img/apple_true.jpg')";

title.textContent = "Мы продаем только подлинную технику Apple";

document.querySelector('.adv').remove();

promptt.textContent = prompt('Как вы относитесь к технике apple', '');