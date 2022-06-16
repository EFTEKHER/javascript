//Error_Handling
let a=19;

try{
    if(a>15)
    {
        throw "Too big";
    }
    else if(a<5)
    {
        throw "Too small";
    }
}
catch(err)
{
    console.log(err);
}