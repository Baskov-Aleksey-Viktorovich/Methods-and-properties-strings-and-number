"use strict";
const str = "test";
console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q"));

const logg = "Hello World";
console.log(logg.slice(6,11));
const name = "Aleksey Victorovich ";
//document.write(name.slice(0,21));
document.write(name.substring(0,21));
document.write(name.substr(0,5));


const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//console.log(parseInt(test));
console.log(parseFloat(test));