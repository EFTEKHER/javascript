let val;
val=this;
//indicate whole document
//this and window same
val=window;
val=window.document;
val=document;
val=document.all; //to get all tags
val=document.all.length;
val=document.head;
val=document.body;
val=document.domain;
val=document.URL;
val=document.characterSet;
val=document.contentType;
val=document.forms;
val=document.forms[0];
val=document.forms[0].method;
val=document.forms[0].action;
val=document.links;
val=document.links[0].href;
val=document.links[0].className;
val=document.links[0].classList;
val=document.images;
val=document.scripts;
val=document.scripts[2];
val=document.scripts[0].src;
val=document.scripts[2].getAttribute('src');
links=document.links
let linkArr=Array.from(links);
linkArr.forEach(function(link){
//console.log(link);
console.log(link.getAttribute('src'));
})
console.log(links);