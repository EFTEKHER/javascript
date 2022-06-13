class person{
    constructor(fname,lname,birthday)
    {
        this.firstname=fname;
        this.lastname=lname;
        this.dob=birthday;
    }
    calculateAge()
    {
        let birthday=new Date(this.dob);
        let diff=Date.now()-birthday.getTime();
        let ageDate=new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    fullname()
    {
        return `${this.firstname}  ${this.lastname} `;
    }
}
let person1=new person("Eftekher","Efte","06-07-2002");
let person2=new person("tonmoy","khan","06-07-2003");
let person3=new person("Haider","Ali","09-07-2002");
console.log(person3);
console.log(person1);
console.log(person2);
console.log(person3.calculateAge());
console.log(person3.fullname());
