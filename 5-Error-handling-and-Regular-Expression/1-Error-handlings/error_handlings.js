//Error Handlings
console.log('before error handlings');

try{
//test();//Reference Error
undefined.test();//Tye Error

}
catch(err)
{
//console.log(err);
console.log(err.message);
console.log(err.name);
}
finally{
    console.log(" I am inside finally !");
}
console.log('After Error Handlings');