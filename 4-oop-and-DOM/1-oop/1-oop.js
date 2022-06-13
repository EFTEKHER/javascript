//class ES6
//class is a template creating objects

let person1={
    firstname:"Eftekher ",
    lastname:"Ali",
    dob:"06-07-2000",
    fullname: function()
    {
        console.log(`${this.firstname}   ${this.lastname}`);
    }
}
let person2={
    firstname:"Tonmoy ",
    lastname:"Ali",
    dob:"06-07-2000",
    fullname: function()
    {
        console.log(`${this.firstname}   ${this.lastname}`);
    }
}
console.log(person1);
console.log(person2);