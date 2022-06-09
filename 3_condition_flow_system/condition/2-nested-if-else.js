var n1=prompt("Enter number1 :");
var n2=prompt("enter number 2;");
var n3=prompt("Enter number3: ");
n1=parseInt(n1);
n2=parseInt(n2);
n3=parseInt(n3);
if(n1>n2 && n1>n3)
{
    var x=`${n1} is greater`;
    console.log(x);
    document.write(x);
}
else if(n2>n1 && n2>n3)
{
    var x=`${n2} is greater`;
    console.log(x);
    document.write(x);
}
else
{
    var x=`${n3} is greater`;
    console.log(x);
    document.write(x);
}