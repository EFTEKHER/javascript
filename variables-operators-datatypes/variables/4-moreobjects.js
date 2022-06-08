var arr = [1, 2, 4, [890.67, 90.898], 5, 7];
var arr1 = [1, 2, 4, ["a", "b"], 5, 7];

console.log(arr);
console.log(arr1);
console.log(arr1.length);
console.log(arr1[3][0]);
var arr2 = [1, 2, 4, ["a", ["world1", "world2"], "b"], 5, 7];
console.log(arr2[3][1][0]);
var ar = [1, 2, ["a", "b"], { prop1: "Item1", prop2: "Item2" }];
console.log(ar);
console.log(ar[3]["prop1"]);
console.log(ar[3].prop1);
var a1 = ["Item1", "Item2", { prop1: "Item1", prop2: [1, 2, ["a", "b"]] }];
var x = a1[2].prop2[2][0];
console.log(x);
var y = a1[2].prop2;
console.log(y);
var z = a1[2].prop2[2];
console.log(z);
var p = z[0];
console.log(p);
var obj={prop1:"Item1",prop2:"Item2",prop3:["Item1 of prop3","Item2 of prop3"]}
console.log(obj.prop3[1]);

