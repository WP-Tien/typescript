// const person : object = {} // Object type
const person: { // Explicit type
    name: string,
    age: number
} = { // Create a Object
    name: 'Vincent',
    age: 30
}
console.log( person.name );

const product : {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}
console.log( product.id );