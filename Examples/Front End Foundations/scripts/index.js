class Person {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(
            "Hello my name is " + this.name + " and I am " + this.age + "."
        );
    }
}

var andrew = new Person("Andrew", 30);
var mike = andrew;
var frank = mike;

frank.age = 50;

andrew.greeting();
mike.greeting();
frank.greeting();