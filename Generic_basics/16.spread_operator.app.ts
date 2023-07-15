const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);
console.log( activeHobbies );

// cloning to prevent mutation.
const person = {
    name: 'Max',
    age: 30
}

const copiedPerson = { ...person };
console.log( copiedPerson );

// spread operator for destructuring.
let animal = {
    name: 'dog',
    color: 'brown',
    age: 7
};

let { age, ...otherProperties } = animal; 
console.log( otherProperties ); // {name: 'dog', color: 'brown'}

// spread operator as rest operator
function sum( a: number, b: number, ...rest : number[]) : any {
    return rest;
}

console.log( sum( 2, 3, 4, 5 ) );