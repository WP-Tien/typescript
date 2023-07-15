const person = {
    name: 'Vincent',
    age: 28,
    hobbies: ['Sport', 'Cooking']
}

// let favoriteActivities: string[];
// favoriteActivities = ['Sport', 'Cooking'];

// let favoriteActivities: any[];
// favoriteActivities = ['Sport', 1];

// let favoriteActivities: number[];
// favoriteActivities = [ 1995, 2023 ];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

