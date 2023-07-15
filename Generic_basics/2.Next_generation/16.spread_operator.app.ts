const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log( activeHobbies ); // ['Hiking', 'Sports', 'Cooking']




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
// Xem rest parameter
function sum( a: number, b: number, ...rest : number[]) : any {
    return rest;
}

console.log( sum( 2, 3, 4, 5 ) ); // 4, 5