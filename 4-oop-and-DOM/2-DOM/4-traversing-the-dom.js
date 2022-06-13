//Traversing The Dom
let val;
let list = document.querySelector("ul");
let listItem = document.querySelector("ul li");
listItem = document.querySelector("ul li:first-child");

val = list;
val = listItem;

//Get childNodes
val = list;

val = list.childNodes;

val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;
//1 Element
//2 Attribute;
//3 Text Node;
//8 comment
//9 Document itself
//10 DocType
val = list.childNodes;
val = list.children;
list.children[0].textContent = "Hello";

val = list.children[1].children[0];
val = list.children[1].children[0].href;
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;
val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentNode.parentNode;
val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;

listItem = document.querySelector("ul li:last-child");
val = val.previousSibling;
val = val.previousElementSibling;
console.log(val);
