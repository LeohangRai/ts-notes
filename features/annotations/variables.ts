const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects like 'Date'
let now: Date = new Date();


// Arrays
let colors: string[]; // array containing strings only
colors = ['a', 'b'];

let marks: number[]; // array containing numbers only
marks = [1, 3];

let truths: boolean[] = [true, false]; //array containing booleans only

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Functions
const printNumber: (num: number) => void = (num: number) => {
    console.log(num);
}

const printString = (str: string): void => {
    console.log(str);
}

const sum: (a: number, b: number) => number = function (a: number, b: number) {
    return a + b;
}


const greet: (name: string) => void = function (name: string) {
    console.log("Hello", name);
}

const greetArrow: (name: string) => void = (name: string) => {
    console.log("Hello", name);
}

// When to use annotations
// 1. Function that returns the 'any' type
const json = `{"x": 10, "y": 20}`;
const coordinates: { x: number, y: number } = JSON.parse(json);
console.log(coordinates);
console.log(coordinates.x);


// 2. When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue']
let foundWord;

words.forEach(word => {
    if(word == 'green') {
        foundWord = true;
    }
})

console.log("foundWord:", foundWord);


// 3. When we want to declare a variable whose type cannot be inferred correctly
const numbers = [-10, -7, 4];
let numberAboveZero: number | boolean = false;

// iterate through the numbers array
// if we find a number that is greater than 0, assign it to numberAboveZero
// otherwise assign false to numberAboveZero
// this means, numberAboveZero could be either of number or boolean type
numbers.forEach(number => {
    if(number > 0) {
        numberAboveZero = number;
    }
})

// This scenario is comparable to the case where we want to find a user's favorite media where the possible choices could be a blog post, an image, a book or a movie or something like that