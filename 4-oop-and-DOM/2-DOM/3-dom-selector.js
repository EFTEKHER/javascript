//multiselectors
//document.getElementByclassName()
let list=document.getElementsByClassName('sample-class');
list[0].style.background='red';
list[0].style.color='white';
list[0].style.padding='10px';
list[0].textContent='Hello World!';
console.log(list[0]);
//document.getElementByTagName()
list=document.getElementsByTagName('li');
list=document.querySelector('ol').getElementsByTagName('li');
let lis=Array.from(list);
lis.forEach(function(item){
    console.log(item);
})
console.log(list);
// document.querySelectorAll();
// # Id
// . class
list=document.querySelectorAll('ol li');

list.forEach(function(item){console.log(item)});
let liOdd=document.querySelectorAll('li:nth-child(odd)');
let liEve=document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(item){
    item.style.background='grey';
    item.style.color='white';
});
liEve.forEach(function(item){
 item.style.backgroundColor='pink';
 item.style.color='white';
});