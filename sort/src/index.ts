import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([1, 0, -23, 8, -2]);
const sorter = new Sorter(numbersCollection);
sorter.sort()
console.log(numbersCollection.data);
