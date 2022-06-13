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
document.querySelector(".container").addEventListener("mouseover", message);
document.querySelector(".container").style.background="grey";
function message(e) {
  let val = e;
  //   val = e.target; //this
  //   console.log(val);
  //   console.log(e.target.id);
  //   console.log(e.timeStamp);
  //   console.log(e.type); //to know the event
  //   //to know the pixel
  //   val = e.clientY;
  //   val = e.clientX;
  //   val = e.offsetY;
//   val = e.offsetX;
//   console.log(val);
val=this;
this.style.background=`#${e.offsetX}`;
console.log(e.offsetX);
console.log(e.offsetY);
console.log(val);

  // console.log("button-clicked");
}
