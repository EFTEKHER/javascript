//Date object
let val;
let val1;
let today = new Date();
let birthday = new Date("08-12-1996");
val = today;
val = today.toString();
birthday = new Date("08/07/2007");
console.log(birthday);
console.log(today);
val1 = birthday;
console.log(val1);
let val2 = today.getMonth();
let val3=today.getFullYear();
console.log(val2);
console.log(val3);

console.log(birthday);
let poday= new Date();
var x=poday.getFullYear();
console.log(x);
var y=poday.getMonth();
console.log(y);
var z=poday.getDay();
console.log(z);
var t1=poday.getHours();
console.log(t1);
var t2=poday.getMilliseconds();
console.log(t2);
var t3=poday.getSeconds();
console.log(t3);
var t4=poday.getTime();
console.log(t4);
birthday.setMonth(2);
birthday.setDate(23);
birthday.setFullYear(1990);
birthday.setHours(10);

console.log(birthday);



