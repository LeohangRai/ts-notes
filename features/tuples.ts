// Sample object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// Let's say we want to form arrays that correspond to the sample 'drink' obj above.
// We set the color 'string' as the first element, carbonated 'boolean' as the second and sugar 'number' as the last element of our array
const pepsi = ['brown', true, 40];
pepsi[0] = 40;
pepsi[1] = 'green';

// But the problem with this approach is that we can easily, maybe accidentally or intentionally replace strings with numbers and numbers with booleans and so on from this array.
// So, in this way, our data model completely breaks down


// To enforce the type of different elements at different positions of this array, we can use a Tuple Type annotation
// This essentially turns the array into a Tuple

const sprite: [string, boolean, number] = ['colorless', true, 40];


// Using Type Alias for Tuple for re-usability
type Drink = [string, boolean, number];

const dew: Drink = ['green', true, 50];
const soda: Drink = ['colorless', true, 0];
const tea: Drink = ['black', false, 0];


// Objects are better than Tuples in most cases
const carStats = {
    horsepower: 700,
    weight: 370
};

const carSpecs: [number, number] = [700, 370];