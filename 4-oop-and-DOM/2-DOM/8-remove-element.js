//remove element
let listItems = document.querySelectorAll("li");
let list = document.querySelector("ul");

listItems[0].remove();

//remove class
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("sample-class");

//let val=list.hasAttribute('class');
let val = list.hasAttribute("title");
list.setAttribute("title", "new-title");
console.log(val);
console.log(listItems);
console.log(list);
