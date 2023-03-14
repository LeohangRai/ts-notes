class AutoMobile {
    public drive(): void {
        this.start();
        console.log("Driving...");
    }

    public honk(): void {
        console.log("Beep Beep");
    }
    
    // private method
    // only accessible withing the same class
    // callable by other methods within the same class
    private start(): void {
        console.log("Starting...");
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