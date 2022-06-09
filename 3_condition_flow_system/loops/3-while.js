var i = 1;
var sum = 0;
var product = 1;
while (i <= 10) {
  if (i == 4) {
    console.log("its four");
  }

  console.log(`i : ${i}`);
  sum += i;
  product = product * i;
  i++;
}
console.log(`sum is : ${sum}`);
console.log(`product is : ${product}`);
