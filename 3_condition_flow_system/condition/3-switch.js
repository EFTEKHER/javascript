console.log(
  "select a for option 1\n select b for option 2 \n select c for option 3 \n select d for option 4"
);

var choice = prompt("Enter Your Choice:");

var text;
//  if (choice == "a") {
//   text = " you have chosen option 1";
//   document.write(text);
//   console.log(text);}
//  else if (choice == "b") {
//   text = " you have chosen option 2";
//   document.write(text);
//   console.log(text);
// } else if (choice == "c") {
//   text = " you have chosen option 3";
//   document.write(text);
//   console.log(text);
// } else {
//   text = " you have chosen option 4";
//   document.write(text);
//   console.log(text);
// }
switch(choice) {
    case "a":
    text = " you have chosen option 1";
    document.write(text);
    console.log(text);
    break;
   case "b":
    text = " you have chosen option 2";
    document.write(text);
    console.log(text);
    break;
  case "c":
    text = " you have chosen option 3";
    document.write(text);
    console.log(text);
    break;
   default:
    text = " you have chosen option 4";
    document.write(text);
    console.log(text);
  }
  