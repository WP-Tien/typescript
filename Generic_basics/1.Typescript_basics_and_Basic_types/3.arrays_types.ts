const person = {
    name: 'Vincent',
    age: 28,
    hobbies: ['Sport', 'Cooking'] // string[]
}

// let favoriteActivities: string[]; // array string
// favoriteActivities = ['Sport', 'Cooking'];

// let favoriteActivities: any[]; // array anything
// favoriteActivities = ['Sport', 1];

// let favoriteActivities: number[]; // array number
// favoriteActivities = [ 1995, 2023 ];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!! The map should be arr not string
}

