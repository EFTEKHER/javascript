var student={
name:"Eftekher Ali Efte",
age:21,
hometown:"Dhaka"
};
console.log(student);
console.log(student.name);
console.log(student["name"]);
student["occupation"]="student";
console.log(student);
student.village="kurigram";
console.log(student);
delete student.village;
console.log(student);
student={};
student.name="Eftekher Ali Efte";
console.log(student);
student.age=21;
console.log(student);