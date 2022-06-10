//For-in string/array/object;
//For-of string/array
let name="I am learning javaScript";
let food=["cake","coca-cola","Fanta"];
//object doesnot have index
let person={
    "name":"Shakib Al Hasan",
    "Profession":"cricketer",
    "team":"Bangladesh",
}

for(var x in name)
{
    console.log(`index:${x} and Item is:${name[x]}`);
}
for(var x in food)
{
    console.log(`index:${x} and Item is:${food[x]}`);
}
for(var x in person)
{
    console.log(`index:${x} and Item is:${person[x]}`);
}