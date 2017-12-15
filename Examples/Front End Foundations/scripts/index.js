class Person {
    constructor(name){
        this.name = name;
    }

    run() {
        console.log(this.name + " is running.");
    }
    walk() {
        console.log(this.name + " is walking.");
    }
    greeting() {
        console.log("Hello, my name is " + this.name + ".");
    }
}

let Andrew = new Person("Andrew");
Andrew.run();
Andrew.walk();
Andrew.greeting();