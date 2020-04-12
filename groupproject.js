class Car {
    constructor(make, model) {
        var self = this;
        this.make = make;
        this.model = model;
        Car.prototype.beep = function () {
            console.log("beep beep");
            console.log(`I'm a ${this.make}!!!!!!!`);
            return this;
        };
        Car.prototype.display = function () {
            console.log(`Make: ${this.make}, Model: ${this.model}`);
            return this;
        };
    }
}
car1 = new Car('Chevy', 'El Camino');
car2 = new Car('Chevy', 'Corvette');

// car1.beep();
// car1.display();
car1.beep().display();
car2.beep().display();

class Truck extends Car {
    constructor(make, model){
        super(make, model)
    }
    haulCargo(cargo){
        console.log(`${this.make} ${this.model} is now hauling ${cargo}.`);
        return this;
    }
}
truck1 = new Truck('Ford', 'F-150');
truck1.display().beep().haulCargo('rocks').beep();