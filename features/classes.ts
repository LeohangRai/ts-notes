class AutoMobile {
    public drive(): void {
        console.log("Driving...");
    }

    public honk(): void {
        console.log("Beep Beep");
    }
}


const vehicle = new AutoMobile();
vehicle.drive();
vehicle.honk();


// Class Inheritance
class Car extends AutoMobile {
    // overriding the drive method
    public drive(): void {
        console.log('Vroom Vroom');
    }
}

const car = new Car();
car.drive();
car.honk();