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


// Class constructors
class Gadi {
    color: string;

    constructor(color: string) {
        this.color = color;
    }
}

const meroGadi = new Gadi('nilo');
console.log(meroGadi.color);


// Constructor parameter shortcut
class Gadi2 {
    constructor(public color: string) {}
}

const meroGadi2 = new Gadi2('rato');
console.log(meroGadi2.color);



// Constructors during Inheritance
class PaymentService {
    constructor(public url: string) {}

    public getUrl(): string {
        return this.url;
    }
}

// Inheritance without overriding the parent class' constructor
class EsewaService extends PaymentService {
}

const myEsewaService = new EsewaService('https://uat.esewa.com.np');
console.log(myEsewaService.getUrl());


// Inheritance and overriding the parent class' constructor
class KhaltiService extends PaymentService {
    constructor(private serviceCharnge: number, url: string) {
        super(url);
    }
}

const myKhaltiService = new KhaltiService(5, 'https://www.test.khalti-pay.com.np');
