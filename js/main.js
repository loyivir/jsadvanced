'use strict';

let arr = ['345', '434343', '234', '789', '678', '105', '2097'];

arr.forEach(element => {
  if(element.startsWith('2') || element.startsWith('4')) {
    console.log(element);
  }  
});

console.log('Простые числа:');

let n = 101;
let  a = [];

for (let m = 0; m < n; m++) {
  a[m] = m;
}
a[1] = 0;
let i = 2;

while(i < n) {
  if(a[i] !== 0) {
    let j = i * 2;
    while (j < n) {
      a[j] = 0;
      j = j + i;
    }   
  }
   i++;
}

let simple = new Set(a);
simple.delete(0);

simple.forEach(element => {
  console.log(element + ': делители - 1, ' + element);
  }  
);