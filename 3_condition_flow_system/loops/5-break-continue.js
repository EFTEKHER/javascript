//break
for(var i=1;i<=5;i++)
{
  

    if(i==4)
    {
        break;
    }
    console.log(`i is ${i}`);

}
console.log('continue');
//continue
//skip
for(var i=0;i<=5;i++)
{
  
    if(i==3)
    {
        continue;
    }
    console.log(`i is ${i}`);

}
console.log("new continue");

for(var i=1;i<=10;i++)
{
    if(i%2==1)
    {
        continue;
    }
    console.log(`i is ${i} `);
}