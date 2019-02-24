let menuItem = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu'),
    bodyImage = document.querySelector('body'),
    title = document.getElementById('title'),
    opros = document.getElementById('prompt'),
    reklama = document.querySelector('.adv'),
    ans = prompt("Ваше отношение к технике ОГРЫЗОК яблока???", "");
    menu5 = menuItem[0].cloneNode(true);


bodyImage.style.background = 'url(./img/apple_true.jpg) center no-repeat';
reklama.remove();
menu.insertBefore(menuItem[2], menuItem[1]);
menu5.innerHTML = 'FIVE пункт';
menu.insertBefore(menu5, menuItem[4]);
title.innerHTML = 'Мы продаем только подлинную технику Apple';
opros.innerHTML = ans;

