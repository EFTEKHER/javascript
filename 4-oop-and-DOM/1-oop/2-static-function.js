//you cannot call static function by object, but you can call static function by class

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
    static test()
    {
        console.log(`I am static`);
    }
}

let person1=new person("Eftekher","Ali");
console.log(person1.greeting());
console.log(person.test());