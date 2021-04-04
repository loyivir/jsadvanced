let num = 266219;
let result = 1;
let str;

if (num === 0) {
  result = 0;
}
  
 while (num > 0) { 
result *= num % 10;
num = Math.floor(num / 10);
 } 
result = result ** 3;
 
str = result + " ";

console.log(str.substr(0, 2));