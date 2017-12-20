function Dog(breed){
    this.breed = breed;
}

Dog.prototype.rollOver = function(times){
    console.log(`The ${this.breed} rolled over ${times} times.`);
}

const sparky = new Dog("Dachshund");
sparky.rollOver(5);