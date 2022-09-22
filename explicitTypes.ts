// EXPLICIT TYPES

let myName: string
let age: number
let isAuthenticated: boolean

myName = 'henry'
// myName = 30

// age = 'henry'
age = 30

// isAuthenticated = 50
isAuthenticated = false

// arrays 
let students: string[] = [ 'nam', 'hung' ]

// students.push(5);
students.push('tien');

// Union
let mixed: (string | number | boolean)[]
mixed = ['henry', 5, true]
mixed.push(6)
mixed.push('tien')
mixed.push(false)

let id: string | number 
id = '123'
id = 123

let hobby: 'book' | 'music'
hobby = 'book'
// hobby = 'cooking'

// object
let person: object
person = { name: 'henry', age: 30 }
person = []

let anotherStudent: {  name: string, age: number, isGood: boolean }

anotherStudent = {
    name: 'Huu Tien',
    age: 27,
    isGood: true
}


