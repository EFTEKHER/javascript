//primitive Data types
//number,string,boolean
let a=9;
let b=a;
//deals with value
//different address
a=45;
console.log(b); //don't effect value in changing
//Reference types
//array,object
//same address

let numbers=[1,2,3];
let newnumbers=numbers;
console.log(newnumbers);
numbers[1]=500;
console.log(numbers);
console.log(newnumbers);
