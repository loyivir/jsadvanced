'use strict';

function printDays(days) {
  let dayString = '';
  for (let i = 0; i < days.length; i++) {
    dayString += '<p>' + days [i] + '</p>';
  }
  return dayString;
}

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

document.body.innerHTML = printDays(week) +  document.body.innerHTML;
document.body.childNodes[6].style.color = "red";
document.body.childNodes[5].style.color = "red";
let currentDay = (new Date()).getDay();
document.body.childNodes[(currentDay === 0)? 6: currentDay - 1].style.fontWeight = "bold";