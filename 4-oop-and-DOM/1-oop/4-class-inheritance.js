//subclass
//inheritance
class person{
    constructor(fname,lname)
    {
        this.firstname=fname;
        this.lastname=lname;

    }
    greeting()
    {
        return `Hello ${this.firstname} ${this.lastname}`;
    }
}
class customer extends person{
constructor(fname,lname,phone,membership)
{
    super(fname,lname);
    this.phone=phone;
    this.membership=membership;
}
 fullname()
 {
    console.log(`${this.firstname}  ${this.lastname}`);
 }
}
let person1=new person("Efte","kher");
console.log(person1);
let customer1=new customer("Tonmoy","khan","017899777778","1234");
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname());