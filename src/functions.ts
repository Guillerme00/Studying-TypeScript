//FUNCTIONS in typescript

//This is a simple function that return the Area of a Square
//In typescript, we must declare the types of variables and functions parameters,
//For example, in the function below, we declare the types of the base, height, and the return value.
function calcArea(base:number, height:number): number {
    return base * height
}


//But if your function doesn't return anything, you must declare the function as "void".
function sum(...numbers: number[]): void {
    const s = numbers.reduce((acc, num) => acc + num, 0)
    console.log(s)
}


//And if you need a function that return more than one type of variables,
// you must declare it before writing the function
function test(): number | string {
    if (10 > 5) {
        return "Ten > Five"
    } else {
        return 5
    }
}

const result = test()
// console.log(result) == "Ten > Five" or 5