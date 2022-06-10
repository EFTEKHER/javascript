//object method
let person={
    firstname:"Eftekher Ali",
    lastname:"Efte",
    dob:"6 july,2000",

    fullname:function()
    {
        //method
        return `${this.firstname} ${this.lastname}`;
    }
}
console.log(person.fullname());
console.log(person.firstname);
let str="Bohubrihi";
console.log(str.length);
console.log(str.split(","));