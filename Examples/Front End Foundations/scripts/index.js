function aClass(name, age){
    this.name = name;
    this.age = age;
}

aClass.prototype.sayName = function () {
    alert(this.name);
}

aClass.prototype.sayAge = function () {
    alert(this.age);
}

let myInstance = new aClass("Andrew", 30);
myInstance.sayName();