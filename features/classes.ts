class AutoMobile {
    public drive(): void {
        this.start();
        console.log("Driving...");
    }

    public honk(): void {
        console.log("Beep Beep");
    }
    
    // private method
    // only accessible within the same class
    // callable by other methods within the same class
    private start(): void {
        console.log("Starting...");
    }

    // protected method
    // only accessible within the same class an child classes
    // callable by other methods within the same class or its child classes
    protected drift(): void {
        console.log("Tokyo Drift...");
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

    public stunt(): void {
        // calling the protected method drift()
        this.drift();
    }
}

const car = new Car();
car.drive();
car.honk();