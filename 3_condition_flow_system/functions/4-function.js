//normal declaration
function saySomething(name)
{
    console.log("Hello "+name);

}
//function expression
let saySomerhing1=function(name1)
{
console.log("Hello "+name1 +" 2");
}

//Arrow Function
let saySomething3=()=>{
    console.log("I am Arrow function ");
}
saySomething("Eftekher");
saySomerhing1("Ali");
saySomething3();

let saySomething4=(name1,name2)=>{
    console.log("I am "+name1+" " +name2);
}
saySomething4("Javascript","ES6");