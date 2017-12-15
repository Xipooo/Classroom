class aClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        alert(this.name);
    }
    sayAge() {
        alert(this.age);
    }
}
const myInstance = new aClass("Andrew", 30);
myInstance.sayName();