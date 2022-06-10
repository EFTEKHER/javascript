function saySomething(para) {
  // alert(`Hello ${para}`);
  console.log(`Hello ${para}`);
  document.write(`\nHello ${para}.\n`);
}
function saySomething2(fname, lname) {
  // alert(`Hello ${para}`);
  console.log(`Hello ${fname}  ${lname}`);
  document.write(`\nHello ${fname}  ${lname}. \n`);
}
let x = "Eftekher Ali Efte";
let p = "Arju";
let q = "khan";
saySomething(x);
document.write("\n");
saySomething2(p, q);
function saySomething3(fname = "Tonmoy", lname = "Ali") {
  // alert(`Hello ${para}`);
  console.log(`Hello ${fname}  ${lname}`);
  document.write(`\nHello ${fname}  ${lname}. \n`);
}
saySomething3();
