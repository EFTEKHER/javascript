//Array iteration forEach
var foods=["IceCream","choclate","cake","Bread"];
var numbers=[1,32,31,2];
//1st parameter :Item
//2nd parameter: Index
//3rd parameter: whole Array
let printEverything=function(item,i,abc){
    console.log(`Index: ${i} and Item :${item}`);
    console.log(abc);

}
foods.forEach(function(value){
console.log(value);
});
console.log("------------------");
foods.forEach(function(item,i){
    console.log(`Index: ${i} and Item :${item}`);
})

foods.forEach(printEverything);

numbers.forEach(function(item,i,abc){
console.log(abc);
})
//create a new array from existing array by using map

function addSomething(item)
{
return `${item} is a food`;
}


let new_array=foods.map(addSomething);
console.log(new_array);
let array_square=numbers.map(function(item){
    return item*item;
})
console.log(array_square);
















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































