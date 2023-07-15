const person: {
    name: string;
    age: number;
    hobbies: string[]; // string array
    role: [number, string] // tuple: fixed length so i can't assign role[1] = 10
} = {
    name: 'Vincent',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user']

console.log(person);