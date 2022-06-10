//Global Scope
var a=1;
let b=2;
const c=3;
var d=10;
let e=9;
console.log(`Global Scope`,a,b,c,d,e);

function scope()
{
    var a=4;
    let b=5;
    const c=6;
    console.log(`Functional Scope`,a,b,c,d);
    console.log(`local cannot declare `,e);
}
scope();
console.log(`Global Scope`,a,b,c,d,e);