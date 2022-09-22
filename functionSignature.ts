// Function signature
// let greet: Function 
// greet = () => console.log('hello world')

let greet: (a: string, b: string) => void // chữ ký function
greet = ( name: string, greeting: string )  => console.log(`${name} says ${greeting}`);
greet('henry', 'hello')


let calculate: ( a: number, b: number, c: string ) => number
calculate = ( numOne: number, numTwo: number, action: string ) => 
    action === 'add' ? numOne + numTwo : numOne - numTwo
console.log( calculate( 4, 2, 'minus' ) )

type Student = {name: string, age: number}
let printStudent: (student: Student) => void

printStudent = ( myStudent: Student ) => {
    console.log(`${myStudent.name} is ${myStudent.age} years old`);
}
printStudent( { name: 'Huu Tien', age: 26} );

const Tan = {
    name: 'Tan',
    age: 27
}
printStudent( Tan )