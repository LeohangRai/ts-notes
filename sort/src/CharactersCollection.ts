export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    /* 
      using toLowerCase() because in JS, strings are compared on the basis of their UTF-16 codes (charCodeAt()) and Upper Case Letters have lower UTF-16 value than Lower Case Letters 
    */
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    /* 
      split the string into an array, swap elements at the left and right index and re-join the array into string
    */
    const characters = this.data.split("");
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join("");
  }
}
