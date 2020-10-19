"use strict";

let date = new Date();
const weekday = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
const month =  ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]


function num2str(n, text_forms) {  
  n = Math.abs(n) % 100; var n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}


function declOfNum(number, titles) {  
 const cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number % 100 > 4 && number%100<20) ? 2 : cases[(number % 10 < 5)?number % 10 : 5] ];  
}

console.log(`Сегодня ${weekday[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()} года, ${date.getHours()} ${declOfNum(date.getHours(), ['час', 'часа', 'часов'])} ${date.getMinutes()} минут ${date.getSeconds()} секунды`);


function format(data) {
  if (data < 10) {
    data = '0' + data;
  }
  return data;
}

let mm = date.getMonth() + 1;
if (mm < 10) {
  mm = '0' + mm;
}
let dateTime = `${format(date.getDate())}.${mm}.${date.getFullYear()} - ${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`;

// console.log(dateTime);

setInterval(() => {
  date = new Date();
  console.log(`${format(date.getDate())}.${mm}.${date.getFullYear()} - ${format(date.getHours())}:${format(date.getMinutes())}:${format(date.getSeconds())}`);
}, 1000);

clearInterval(setInterval);
