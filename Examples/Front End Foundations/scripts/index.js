(function () {
    let person = {
        firstName: "John",
        lastName: "Smith",
        getFullName: function() {
            console.log(this.firstName + " " + this.lastName);
        }
    }
    person.getFullName();

    let carMiles = {
        odometer: 5000,
        traveled: 250,
        getUpdatedOdometer: function() {
            console.log(this.odometer + this.traveled);
        }
    };
    
    carMiles.getUpdatedOdometer();
})();