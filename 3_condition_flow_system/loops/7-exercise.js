var n = parseInt(prompt("Enter your number series : "));
var sum = 0;
var series = " ";
for (var i = 1; i <= n; i++) {
  sum += i ** 2;
  series += (i ** 2).toString();
  if (i == n) {
    continue;
  }
  series += " + ";
}
console.log(sum);
var x = series + " = " + sum;
console.log(x);
console.log(`${series}=${sum}`);
document.write(x);
