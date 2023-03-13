// Without Interfaces

// Sample object
const oldCar = {
    name: 'corolla',
    year: 2007,
    broken: true
}

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`
        Name: ${vehicle.name}
        Year: ${vehicle.year}
        Broken? ${vehicle.broken}
    `);
}
printVehicle(oldCar);


// With Interfaces
interface Vehicle {
    name: string,
    year: number,
    broken: boolean
}

// Here, we can think of "Vehicle" as being kind of like a variable that refers to a Type

const printVehicle1 = (vehicle: Vehicle): void => {
    // do stuff
}

printVehicle1(oldCar);


// Interface with methods
interface Automobile {
    name: string;
    year: Date;
    broken: boolean;
    summary(): void;
}

// Now any variable that implements the Automobile interface needs to have a name, a year and a broken property. In addition, it also needs to implement a method named summary that returns void.


const printAutomobile = (automobile: Automobile): void => {
    // do stuff
}

const myCar = {
    name: 'Benz',
    year: new Date(),
    broken: false,
    summary() {
        console.log(this.name, this.year);
    }
}

printAutomobile(myCar);


// Interface with a method only and no attributes
interface Reportable {
    summary(): string;
}

const ourCar = {
    name: 'Ferrari',
    year: 2003,
    broken: false,
    summary(): string {
        return this.name;
    }
}

function printCar(car: Reportable) {
    console.log(car.summary());
}

printCar(ourCar);


// A single Interface can be used to describe the properties of two or more very different types of objects

const sampleCar = {
    name: 'Ford',
    summary(): string {
        return this.name
    }
}

const coldDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

function printSummary(item: Reportable): void {
    console.log(item.summary());
}


// Notice how our sampleCar object has a 'summary' function tied to it. Our 'coldDrink' object also has a 'summary' function tied to it. These 2 objects represent very different things inside of our application. But they both have a summary function that returns a string. This means both of these 2 objects are considered to be of the type 'Reportable'. And since both of them are of type 'Reportable', both of them can be passed as an argument to the 'printSummary' function. 

printSummary(sampleCar);
printSummary(coldDrink);

// This means that we can use a single Interface to describe the shape or the different properties of very different objects. This encourages us to write somewhat generic looking functions.

// Notice how we we named our function "printSummary" instead of "printVehicle" or "printDrink". 

// So in doing so, we got a much more re-usable function inside of our application. This function can be used with any type of object that satisfies the 'Reportable' interface. 