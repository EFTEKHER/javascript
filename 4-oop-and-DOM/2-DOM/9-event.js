//Events of javascript
//onclick
// function message()
// {
// console.log("mouse over button");
// }
// function message()
// {
//     console.log('button-clicked');
// }
//event listener
// document.getElementById("sample-btn").addEventListener("click", message);
document.querySelector("#name").addEventListener("focus",test);
document.querySelector("#name").addEventListener("keyup",test2);

function test(e)
{
    this.style.background='pink';
console.log("Focused!");
}
function test2(e)
{
  // console.log(this.value); 
  document.getElementById("demo").innerText=this.value;
}