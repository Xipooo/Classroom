class Dog {
    constructor(breed) {
        this.breed = breed;
    }
    rollOver(times){
        console.log(`The ${this.breed} rolled over ${times} times.`);
    }
}

const sparky = new Dog("Dachshund");
sparky.rollOver(5);