import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([1, 0, -23, 8, -2]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("jzfdHaB");
const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(700);
linkedList.add(-7);
linkedList.add(4);
linkedList.add(90);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
