console.log("select option: \n 1.sum \n 2.sub \n 3.multiply \n 4.divide\n");

var num1 = prompt("enter your first number :");
var num2 = prompt("Enter second number :");
var operation = prompt("Enter operation ");

num1 = parseInt(num1);
num2 = parseInt(num2);
operation = parseInt(operation);

var num1con = isNaN(num1);
var num2con = isNaN(num2);
var operationCon = isNaN(operation);
if (num1con || num2con || operationCon) {
  console.log("Invalid Input");
} else {
  switch (operation) {
    case 1:
      result = num1 + num2;
      console.log(result);
      document.write(result);
      break;
    case 2:
      result = num1 - num2;
      console.log(result);
      document.write(result);
      break;

    case 3:
      result = num1 * num2;
      console.log(result);
      document.write(result);
      break;
    case 4:
      result = num1 / num2;
      console.log(result);
      document.write(result);
      break;
    default:
      console.log("invalid");
      document.write("invalid");
  }
}
