// Types
// Now in Typescript, variables have Static Typing. You must declare their types when you create them.
//Examples below:

let raining: boolean = true;
let age: number = 27;
let height: number = 128.23;
let word: string = "Finish";

// If you need your variable to have more than 1 type, just declare it with |
let age2: number | string = 20
age2 = "Twenty"

// Any
//Declaring a variable with *any*, you can use all types in this variable
//*WARNING* use it with moderation. If all your variables is 'any',
//you dont have security and dont have reasons to use Typescript
let API: any;
API = 10;
API = true;
API = "Ten"
API = undefined
API = [1,2,3,4,5]


//Arrays
// Differences between Array and Read only Array
//Regular arrays have the method .push(), but the ReadOnlyArrays don't.
//Other methods like .map() or .filter() exist in both
const me: string[] = ["Gui","Gabriel"];
const tec: Array<string> = ["a","b","c"];
const grades: ReadonlyArray<number> = [1,2,3,4,5,6,7,8,9]
//In tuples you can use differents types in the same object
const tuples: [name: string, dev: boolean, age: number] = ["Gui", true, 20]
