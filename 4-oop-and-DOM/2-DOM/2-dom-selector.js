//document.getElementById;
//Getting an element
let val;
val = document.getElementById("document-title-id");
val = document.getElementById("document-title-id").id;
val = document.getElementById("document-title-id").className;

//console.log(val);
//changing style
document.getElementById("document-title-id").style.background = "#333";
document.getElementById("document-title-id").style.color = "#fff";
document.getElementById("document-title-id").style.padding = "10px";
document.getElementById("document-title-id").style.display = "block";
//changing content
document.getElementById("document-title-id").textContent = "New Title";
document.getElementById("document-title-id").innerHTML = "Again New Title";
document.getElementById("document-title-id").innerHTML =
  "<i> Again Again New Title </i>";

val = document.getElementById("document-title-id");
console.log(val);
val.innerHTML = "HA HA HA";

//document query selector
val = document.querySelector("#document-title-id");
//id
val=document.querySelector(".document-title-class");
//class
val=document.querySelector("h3");
//tag
val=document.querySelector('ol');
//list
val=document.querySelector('ol li');
//val=document.querySelector('ul li');
val.style.background='red';
val.style.color='white';
val=document.querySelector('li:last-child');
val=document.querySelector('li:nth-child(2)');
document.querySelector('li:nth-child(1)').innerHTML="Hello";
document.querySelector('li:nth-child(even)').innerText="Hello";
console.log(val);
