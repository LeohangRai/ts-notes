// Type Inference in Arrays
const stringsArr = ['a', 'b', 'c']; // gets inferred as string[]

const numbersArr = [1, 2, 3]; // gets inferred as number[]

const strAndNumArr = ['a', 1]; // gets inferred as (string | number)[]

const anyArr = []; // gets inferred as never[]


// Complex objects as Array elements
const dates = [new Date(), new Date()];


// Two-dimensional Arrays
const twoDArr = [
    ['benz'],
    ['corolla'],
    ['camaro']
]
// inferred as string[][]

// Two-dimensional Multi-type Arrays
const twoDMultiTypeArr = [
    ['benz'],
    'hello',
    7
]
// inferred as (string | number | string[])[]

// Three-dimensional Arrays
const threeDArr = [
    [['benz', 'hello']],
    'hello',
    7
]
// inferred as (string | number | string[][])[]



// Why Typed Arrays
// 1. TS can help us by doing Type inference on the values that we extract from a typed array
const carMakers = ['ford', 'toyota', 'chevy'];
const car1 = carMakers[0]; // car1 is inferred as string
const car2 = carMakers.pop(); // car2 is inferred as string


// 2. TS can prevent us from adding incompatible values to the array

// 3. We can get help with array methods like "map", "forEach", "filter", "reduce" and so on.

// Help with 'map'
carMakers.map((car): string => {
    return car;
})

// TS knows that the 'car' variable that we are passing to the callback function that we are passing to the 'map' function above will be of type 'string'. So TS will help us by suggesting the properties of the 'car' parameter, i.e. string properties like 'length' and string methods such as .toLowerCase(), .split(), .slice(), .splice() and so on.


// Flexible Types
const importantDates = [new Date(), '2023-01-01'];
// gets inferred as (string | Date) []


const importantDates2: (string | Date)[] = [new Date()];
importantDates2.push('2023-01-02')
importantDates2.push(new Date);