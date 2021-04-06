'use strict';

function stringFormatter(str) {
  if ((typeof str) !== 'string'){
    console.log('Это не строка!');
    return '';
  }
  let newStr = str.trim();
  if (newStr.length > 30) {
    newStr = newStr.substring(0, 31) + '...';
  }
  return newStr;
}

let notAString = 42;
let longString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let shortString = '   Hello World!    ';

console.log(stringFormatter(notAString));
console.log(stringFormatter(longString));
console.log(stringFormatter(shortString));