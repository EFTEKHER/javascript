//Adding Elem,ent into the Dom
//create DOM
let olItem = document.createElement("li");

//AddId_and_class
olItem.className = "a new another-class";
olItem.id = "new-element";
//Add attribute
olItem.setAttribute("title", "A title to a new element");
//Appending
olItem.appendChild(document.createTextNode("javascript"));
document.querySelector("ol").appendChild(olItem);
console.log(olItem);
let ulItem = document.createElement("li");

let link = document.createElement("a");

link.appendChild(document.createTextNode("Instagram"));
link.setAttribute("href", "https://www.instagram.com");

ulItem.appendChild(link);
document.querySelector('ul').appendChild(ulItem);
console.log(ulItem);
//console.log(link);
