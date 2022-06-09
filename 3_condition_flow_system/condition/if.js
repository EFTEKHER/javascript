var age=prompt("Enter your age?");

if(age>=50)
{
    console.log('old');
    document.write('old');
}
else if(age>=30 && age<50)
{
var x="Greater than 30 or equal to and less than 50";
console.log(x);
document.write(x);
}
else if(age<30 && age>=18)
{
    var y="Greater or equal to 18 but less than 30 ";
    console.log(y);
    document.write(y);
}
else if(age<18 && age>=0)
{
var y="under 18";
console.log(y);
document.write(y);
}
else
{
  console.log("Invalid input");  
}


