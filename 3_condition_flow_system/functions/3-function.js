//functional parameter/argument
function addSum(a=0,b=0)
{
console.log(`${a}+${b}=${a+b}`);
return a+b;
console.log("Line after Return");
}
console.log(addSum(4,5));
let sum=addSum(2.3,4.9);
console.log(sum);