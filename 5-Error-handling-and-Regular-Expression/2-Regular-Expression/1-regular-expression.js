//Regular Expression
//pattern matching technique
//email mobile id valid
let re;
let str;
re=/hello/;
re=/Hello/i; //i=case sensitive
console.log(re); 
console.log(re.source);
str="hello world";
str="Ahain Hello world";
str="Hell world";
str="sdsHellosds world ";
str="again Hello world Hello world";
str="world";
//exec() -Return results in an array or null;

let result=re.exec(str);
//console.log(result);

//test() -true/false
result=re.test(str);

//match() - returns Array or null
str="again Hello world Hello world";
result=str.match(re);


//search() -returns index of the first match or -1
result=str.search(re);

//replace() -Return new String

let newstr=str.replace(re,"Hi");
console.log(result);
console.log(newstr);