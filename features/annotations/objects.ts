// sample obj init
const profile = {
    name: 'alex',
    age: 20,
    loc: {
        lat: 7,
        lng: 4
    },
    setAge(age: number): void {
        this.age = age;
    }
}


// Note that these type annotations are not actually necessary since Typescript would automatically infer them from the 'profile' object itself

// destructuring values from object with type annotations
const { age }: { age: number } = profile;


// destructuring nested values and adding type annotations

const { 
    loc: {lat, lng} 
}: { loc: { lat: number, lng: number } } = profile;

console.log(lat)
console.log(lng)