class Car {
    constructor(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }

    get make() {
        return this._make;
    }
    set make(value){
        const possibleMakes = ["Honda", "Toyota", "Nissan", "Ford"];

        if (possibleMakes.includes(value)){
            this._make = value;
        }
        else {
            throw Error("Make must be " + possibleMakes);
        }
    }

    get description() {
        return this._year + " " + this._make + " " + this._model;
    }
}


try {
    let myCar = new Car("Nissan", "Rogue", 2017);
    myCar.make = "Datsun";
}
catch(error){
    alert(error.message);
}

console.log(myCar.description);