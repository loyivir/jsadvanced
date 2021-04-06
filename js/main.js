'use strict';

function printDays(days) {
  let dayString = '';
  for (let i = 0; i < days.length; i++) {
    dayString += days[i];
    if (i < (days.length - 1)) {
      dayString += ', ';
    }
  }
  return dayString;
}

let daysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//Многомерный массив студентов:
let allDays = {
	'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
};

let lang = (confirm('Вывести дни недели на русском?')) ? 'ru' : 'en';

console.log('Через if:');
if (lang === 'ru')
{
  console.log(printDays(daysRu));
} else {
  console.log(printDays(daysEn));
}
console.log('Через switch:');
switch (lang) {
  case 'ru':
    console.log(printDays(daysRu));
    break;
  case 'en':
    console.log(printDays(daysEn));
    break;
  default:
    break;
}
console.log('Через массив:');
console.log(printDays(allDays[lang]));

let namePerson = prompt('Введите ваше имя');
console.log(namePerson + ': ');
console.log((namePerson ==='Артем') ? 'директор' : ((namePerson ==='Максим') ? 'преподаватель' : 'студент'));