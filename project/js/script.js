'use strict'

let money = prompt ("Ваш бюджет на месяц?");

console.log (money);

let time = prompt ("Введите дату в формате ДД.ММ.ГГГГ");

let t = time.split ('.');
let year = t[2];
let month = t[1]-1;
let day = t[0];

let date = new Date (year, month, day);

console.log (date);



//console.log (typeof())

